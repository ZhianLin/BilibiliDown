package nicelee.ui;

import java.awt.Font;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.net.URL;
import java.util.Enumeration;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JTabbedPane;
import javax.swing.UIManager;

import nicelee.bilibili.INeedAV;
import nicelee.bilibili.INeedLogin;
import nicelee.bilibili.PackageScanLoader;
import nicelee.bilibili.model.VideoInfo;
import nicelee.bilibili.util.CmdUtil;
import nicelee.bilibili.util.ConfigUtil;
import nicelee.bilibili.util.HttpCookies;
import nicelee.bilibili.util.Logger;
import nicelee.bilibili.util.RepoUtil;
import nicelee.bilibili.util.ResourcesUtil;
import nicelee.bilibili.util.SysUtil;
import nicelee.ui.item.JOptionPane;
import nicelee.ui.item.MJMenuBar;
import nicelee.ui.thread.BatchDownloadRbyRThread;
import nicelee.ui.thread.CookieRefreshThread;
import nicelee.ui.thread.DownloadRunnable;
import nicelee.ui.thread.LoginThread;
import nicelee.ui.thread.MonitoringThread;

public class FrameMain_v3_4 extends JFrame {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	JTabbedPane jTabbedpane;// 存放选项卡的组件

	public static void main(String[] args) {
		System.out.println();
		// System.getProperties().setProperty("file.encoding", "utf-8");
		boolean isFFmpegSurported = SysUtil.surportFFmpegOfficially();
		System.out.println("Java version:" + System.getProperty("java.specification.version"));
		System.out.println(ResourcesUtil.baseDirectory());
		// 读取配置文件
		ConfigUtil.initConfigs();
		// -v 打印版本，然后退出
		if(args.length == 1 && "-v".equalsIgnoreCase(args[0])) {
			System.out.println(Global.version);
			System.exit(0);
		}
		// 显示过渡动画
		Global.frWaiting = new FrameWaiting();
		Global.frWaiting.start();

		if (Global.lockCheck) {
			if (ConfigUtil.isRunning()) {
				Global.frWaiting.stop();
				JOptionPane.showMessageDialog(null, "程序已经在运行!", "请注意!!", JOptionPane.WARNING_MESSAGE);
				return;
			}
			ConfigUtil.createLock();
			Runtime.getRuntime().addShutdownHook(new Thread(() -> {
				ConfigUtil.deleteLock();
			}));
		}
		
		nicelee.bilibili.util.custom.System.init(Global.syncServerTime);
		// 初始化主题
		initUITheme();

		// 初始化UI
		FrameMain_v3_4 main = new FrameMain_v3_4();
		main.InitUI();

		// 初始化监控线程，用于刷新下载面板
		MonitoringThread th = new MonitoringThread();
		th.start();

		// 尝试刷新cookie
		INeedLogin inl = new INeedLogin();
		String cookiesStr = inl.readCookies();
		if (cookiesStr != null) {
			Global.needToLogin = true;
			if(Global.tryRefreshCookieOnStartup && !Global.runWASMinBrowser) {
				HttpCookies.setGlobalCookies(HttpCookies.convertCookies(cookiesStr));
				CookieRefreshThread.showTips = false;
				CookieRefreshThread thCR = CookieRefreshThread.newInstance();
				thCR.start();
				try {
					thCR.join();
				} catch (InterruptedException e1) {
				}
				CookieRefreshThread.showTips = true;
			}
		}
		// 初始化 - 登录
		LoginThread loginTh = new LoginThread();
		loginTh.start();

		// 初始化 - ffmpeg环境判断
		CmdUtil.DEFAULT_WORKING_DIR = ResourcesUtil.baseDirFile();
		String ffmpeg = ResourcesUtil.resolve(Global.ffmpegPath);
		String[] cmd = new String[] { ffmpeg, "-version" };
		if (!CmdUtil.run(cmd)) {
			if (isFFmpegSurported) {
				Object[] options = { "是", "否" };
				int m = JOptionPane.showOptionDialog(null,
						"检测到当前没有ffmpeg环境, mp4及小部分flv文件将无法转码或合并.\r\n     是否下载ffmpeg(自编译, 3M左右)?", "请选择：",
						JOptionPane.YES_NO_OPTION, JOptionPane.PLAIN_MESSAGE, null, options, options[0]);
				Logger.println(m);
				if (m == 0) {
					VideoInfo avInfo = new INeedAV().getVideoDetail("ffmpeg", 0, false);
					DownloadRunnable downThread = new DownloadRunnable(avInfo, avInfo.getClips().get(1234L), 0);
					Global.queryThreadPool.execute(downThread);
				}
			} else {
				JOptionPane.showMessageDialog(null, "当前没有ffmpeg环境，大部分mp4及小部分flv文件将无法转码或合并", "请注意!!",
						JOptionPane.WARNING_MESSAGE);
			}
		} else {
			CmdUtil.FFMPEG_PATH = ffmpeg;
		}

		//
		if (Global.saveToRepo) {
			RepoUtil.init(false);
		}
                      
		// 预扫描加载类
		PackageScanLoader.validParserClasses.isEmpty();
		if(Global.batchDownloadRbyRRunOnStartup) {
			// 开始按计划周期性批量下载
			new Thread(new Runnable() {
				@Override
				public void run() {
					// 等待相关线程运行完毕
					try {
						loginTh.join();
					} catch (InterruptedException e) {}
					new BatchDownloadRbyRThread(Global.batchDownloadConfigName).start();
				}
			}).start();
		}
		System.out.println("如果过度界面显示时间过长，可双击跳过");
		try {
			while (Global.frWaiting.isVisible()) {
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
			Global.frWaiting.stop();
		}
		Global.frWaiting = null;
		main.setVisible(true);
		main.setExtendedState(JFrame.NORMAL);
		main.toFront();
	}

	/**
	 * 
	 */
	static void initUITheme() {
		try {
			if (!Global.themeDefault) {
				UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
				Font font = new Font("Dialog", Font.PLAIN, 12);
				Enumeration<Object> keys = UIManager.getDefaults().keys();
				while (keys.hasMoreElements()) {
					Object key = keys.nextElement();
					Object value = UIManager.get(key);
					if (value instanceof javax.swing.plaf.FontUIResource) {
						UIManager.put(key, font);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 
	 */
	public void InitUI() {

		this.setTitle("BiliBili Down~~" + Global.version);
		this.setSize(1200, 767);
		this.setResizable(false);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		URL iconURL = this.getClass().getResource("/resources/favicon.png");
		ImageIcon icon = new ImageIcon(iconURL);
		this.setIconImage(icon.getImage());

		//菜单栏
		MJMenuBar menu = new MJMenuBar(this);
		this.setJMenuBar(menu);
		
		jTabbedpane = new JTabbedPane();
		Global.tabs = jTabbedpane;
		jTabbedpane.setTabLayoutPolicy(JTabbedPane.SCROLL_TAB_LAYOUT);
		// Index Tab
		Global.index = new TabIndex(jTabbedpane);
		jTabbedpane.addTab("主页", Global.index);
		// 下载页
		Global.downloadTab = new TabDownload();
		jTabbedpane.addTab("下载页", Global.downloadTab);
		// 作品页
//		JLabel label = new JLabel("作品页");
//		TabVideo tab = new TabVideo(label);
//		jTabbedpane.addTab("作品页", tab);
//		jTabbedpane.setTabComponentAt(jTabbedpane.indexOfComponent(tab), label);

		this.setContentPane(jTabbedpane);
		// 关闭窗口时
		this.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				super.windowClosing(e);
				CmdUtil.deleteAllInactiveCmdTemp();
			}
		});
		SysTray.buildSysTray(this, icon.getImage());
	}

}
