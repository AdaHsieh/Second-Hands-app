// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win_1 = Titanium.UI.createWindow({  
    title:'元智二手拍賣',
    backgroundColor:'#fff'
});


var btn1 = Ti.UI.createButton({});
var imView1 = Ti.UI.createImageView({
	top:'20%',left:'40%',width:'25%',
	image:'image/logo.png'
});
  
var labal_1 = Ti.UI.createLabel({
	height:'25%',
	top:'36%',left:'20%',
	color:'#000',
	text:'帳號：',
	font:{fontSize:13}
});

var textField_id = Ti.UI.createTextField({
	left:'31%',top:'45%',width:'50%',height:'7%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
    editable:true,
    keyboardType:Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType:Ti.UI.RETURNKEY_DONE,
    value:'Ada'
});

var labal_2 = Ti.UI.createLabel({
	height:'25%',
	top:'44%',left:'20%',
	color:'#000',
	text:'密碼：',
	font:{fontSize:13}
});

var textField_pw = Ti.UI.createTextField({
	left:'31%',top:'53%',width:'50%',height:'7%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
    passwordMask:true, 
    keyboardType:Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType:Ti.UI.RETURNKEY_DONE,
    value:'aaa'
});

textField_pw.addEventListener('focus',function(e){
	labal_1.visible = false;
	textField_id.visible= false;
	labal_2.top = '36%';
	textField_pw.top = '45%';
});

textField_pw.addEventListener('return',function(e){
	labal_2.top = '44%';
	textField_pw.top = '53%';
	labal_1.top = '36%';
	textField_id.top = '45%';
	labal_1.visible = true;
	textField_id.visible= true;
});

var btn_login = Ti.UI.createButton({
	//left:232,top:303,width:40,
	left:'35%',top:'64%',width:'30%',height:'6%',
	backgroundColor:'#fff',
	title:'註冊新帳號',
});
btn_login.addEventListener('click',function(e){
	var wina = Titanium.UI.createWindow({  
		title:'註冊',
    	backgroundColor:'#fff',
    	url:'newMember.js'
	});
	
	var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'註冊',
   		window:wina
	});
	
	tabGroup.addTab(tab1);
	tabGroup.open();
});
var loginReq_a = Ti.Network.createHTTPClient();
var btnLogin = Ti.UI.createButton({
    left:'67%',top:'64%',width:'15%',height:'6%',
	backgroundColor:'#fff',
	title:'登入',
});
btnLogin.addEventListener('click',function(e){
    if(textField_id != '' && textField_pw.value != ''){
        loginReq_a.open("POST","http://140.138.142.203/Group_1/login_1.php");
        var params = {
            dbusername: "Group1", dbpassword: "Ti1358",
            username: textField_id.value, password: textField_pw.value
        };
        loginReq_a.send(params);
    }else
    {
        var dialog = Ti.UI.createAlertDialog({
            message:'請輸入完整帳號密碼！', ok: '好的',
        }).show();
    }
});
loginReq_a.onload = function(){
    var response = this.responseText;

    if(response == 'ok')
    {
    
    var dialog = Ti.UI.createAlertDialog({
        message:'登入成功 ！', ok: '好的',
    }).show();
    
    var btnLogout = Ti.UI.createButton({
    	title:'登出',
    });
    var wina = Titanium.UI.createWindow({  
		title:'個人化設定',
    	backgroundColor:'#fff',
    	url:'setting.js',
    	leftNavButton: btnLogout,
	});
	wina.setLeftNavButton(btnLogout);
	var winb = Titanium.UI.createWindow({  
		title:'設定',
    	backgroundColor:'#fff',
    	url:'set.js'
	});
	
	var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'個人化設定',
   		window:wina
	});
	var tab2 = Titanium.UI.createTab({  
    	icon:'KS_nav_ui.png',
    	title:'修改個人資料',
    	window:winb
	});

	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);

	tabGroup.open();
      
    } else
    {
        var dialog = Ti.UI.createAlertDialog({
            message:'登入失敗 ！', ok: '再試一次！',
        }).show();
        textField_id.value='';
        textField_pw.value='';
    }
};

win_1.add(btnLogin);
win_1.add(btn_login);
win_1.add(labal_2);
win_1.add(textField_id);
win_1.add(textField_pw);
win_1.add(labal_1);
win_1.add(imView1);
win_1.open();


