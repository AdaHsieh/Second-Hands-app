var win_2 = Ti.UI.currentWindow;
var tabGroup = Titanium.UI.createTabGroup();


var btnLogout = Ti.UI.createButton({
    	title:'登出',
    });

win_2.setLeftNavButton(btnLogout);

btnLogout.addEventListener('click',function(e){
    
	var dialog = Ti.UI.createAlertDialog({
    	message:'登出成功！', ok: '好的',
    }).show();
    var wina = Ti.UI.createWindow({
    	title:'首頁',
    	backgroundColor:'#fff',
    	url:'app.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'首頁',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
  
});

var view_homepage = Ti.UI.createImageView({
	top:'5%',left:'25%',width:'24%',height:'20%',
	image:'image/news.png',
});
view_homepage.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'最新消息',
    	backgroundColor:'#fff',
    	url:'news.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'最新消息',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});

var view_search = Ti.UI.createImageView({
	top:'5%',right:'25%',width:'24%',height:'20%',
	image:'image/find.png',
});
view_search.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'搜尋',
    	backgroundColor:'#fff',
    	url:'search.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'搜尋',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});

var view_sell = Ti.UI.createImageView({
	top:'27%',left:'25%',width:'24%',height:'20%',
	image:'image/commodity.png',
});
view_sell.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'貼文',
    	backgroundColor:'#fff',
    	url:'sell.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'貼文',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});

var view_myfavor = Ti.UI.createImageView({
	top:'27%',right:'25%',width:'24%',height:'20%',
	image:'image/top5.png',
});
view_myfavor.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'首選賣家',
    	backgroundColor:'#fff',
    	url:'top5.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'首選賣家',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});

var view_type = Ti.UI.createImageView({
	top:'49%',left:'25%',width:'24%',height:'20%',
	image:'image/category.png',
});
view_type.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'搜尋',
    	backgroundColor:'#fff',
    	url:'category.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'搜尋',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});
var view_group = Ti.UI.createImageView({
	top:'49%',right:'25%',width:'24%',height:'20%',
	image:'image/joinus.png',
});
view_group.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'揪團',
    	backgroundColor:'#fff',
    	url:'joinus.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'揪團',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});
var view_message = Ti.UI.createImageView({
	top:'71%',right:'25%',width:'24%',height:'20%',
	image:'image/messge.png',
});
view_message.addEventListener('click',function(e){
	Ti.Platform.openURL('https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dwm&scc=1&ltmpl=default&ltmplcache=2&emr=1');
});



var view_logout = Ti.UI.createImageView({
	top:'71%',left:'25%',width:'24%',height:'20%',
	image:'image/setting.png',
});

view_logout.addEventListener('click',function(e){
	
    var wina = Ti.UI.createWindow({
    	title:'修改個人資料',
    	backgroundColor:'#fff',
    	url:'set.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'修改個人資料',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});
win_2.add(view_sell);
win_2.add(view_search);
win_2.add(view_type);
win_2.add(view_myfavor);
win_2.add(view_group);
win_2.add(view_homepage);
win_2.add(view_logout);
win_2.add(view_message);

//win_2.open();

