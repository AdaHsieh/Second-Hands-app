var win_5 = Ti.UI.currentWindow;
var tabGroup = Titanium.UI.createTabGroup();

var btnLogout = Ti.UI.createButton({
    	title:'重新登入',
    });

win_5.setLeftNavButton(btnLogout);

btnLogout.addEventListener('click',function(e){
    
    if (textField_userid.value != '' && textField_userpasswd.value != '' &&
    textField_userpasswd1.value != '' && textField_username.value != '' && textField_userphone.value != '' &&
    textField_useremail.value != ''
    ) {
	var dialog = Ti.UI.createAlertDialog({
    	message:'註冊成功！', ok: '好的',
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
 }
 else
 {
 	var dialog = Ti.UI.createAlertDialog({
    	message:'尚有資訊沒有填完！', ok: '好的',
    }).show();
 	
 }
});

var view_userpic = Ti.UI.createImageView({
	left:'5%',top:'8%',width:'35%',height:'30%',
	image:'image/user.png'
});
win_5.add(view_userpic);
	
var textField_userupload = Ti.UI.createTextField({
	left:'5%',top:'40%',width:'60%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
});
win_5.add(textField_userupload);

var btn5 = Ti.UI.createButton({
	//left:232,top:303,width:40,
	left:'70%',top:'40%',width:'25%',height:'6%',
	backgroundColor:'#fff',
	title:'上傳',
});
win_5.add(btn5);
var btnFinish = Ti.UI.createButton({
	title:'註冊',
});
var btnFlexSpace = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});
var label_userid = Ti.UI.createLabel({
	left:'5%',top:'50%',width:'35%',height:'6%',
	text:'帳號：'
});
win_5.add(label_userid);

var textField_userid = Ti.UI.createTextField({
	left:'30%',top:'50%',width:'50%',
	height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
    returnKeyType: Ti.UI.RETURNKEY_DONE
});
win_5.add(textField_userid);
/*
var btnCheckid = Ti.UI.createButton({
	left:'81%',top:'50%',width:'15%',
	height:'6%',
	title:'check'
});
win_5.add(btnCheckid);
*/
var label_userpasswd = Ti.UI.createLabel({
	left:'5%',top:'58%',width:'20%',height:'6%',
	text:'密碼：'
});
win_5.add(label_userpasswd);

var textField_userpasswd = Ti.UI.createTextField({
	left:'30%',top:'58%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT
});
win_5.add(textField_userpasswd);

var label_userpasswd1 = Ti.UI.createLabel({
	left:'5%',top:'66%',width:'30%',height:'6%',
	text:'確認密碼：'
});
win_5.add(label_userpasswd1);

var textField_userpasswd1 = Ti.UI.createTextField({
	left:'30%',top:'66%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    color: '#336699',
    returnKeyType: Ti.UI.RETURNKEY_DONE,
    keyboardType: Ti.UI.KEYBOARD_DEFAULT
});
win_5.add(textField_userpasswd1);

var label_username = Ti.UI.createLabel({
	left:'5%',top:'74%',width:'40%',height:'6%',
	text:'用戶名：'
});
win_5.add(label_username);

var textField_username = Ti.UI.createTextField({
	left:'30%',top:'74%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	returnKeyType: Ti.UI.RETURNKEY_DONE,
});
win_5.add(textField_username);

var label_userphone = Ti.UI.createLabel({
	left:'5%',top:'82%',width:'40%',height:'6%',
	text:'聯絡電話：'
});
win_5.add(label_userphone);

var btnDoneTel = Ti.UI.createButton({
	title: 'Done',
	width: 100,
	style: Ti.UI.iPhone.SystemButtonStyle.DONE
});
btnDoneTel.addEventListener('click', function(e){
	textField_userphone.blur();
});

var textField_userphone = Ti.UI.createTextField({
	left:'30%',top:'82%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
    keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
	keyboardToolbar: [btnFlexSpace, btnDoneTel],
});
win_5.add(textField_userphone);

var label_usermail = Ti.UI.createLabel({
	left:'5%',top:'90%',width:'40%',height:'6%',
	text:'聯絡信箱：'
});
win_5.add(label_usermail);

var textField_usermail = Ti.UI.createTextField({
	left:'30%',top:'90%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	 returnKeyType: Ti.UI.RETURNKEY_DONE,
    keyboardType: Ti.UI.KEYBOARD_URL
});
win_5.add(textField_usermail);
//為了在輸入時可看到每個欄位
textField_userid.addEventListener('click',function(e){
	textField_userupload.visible = false;
	btn5.visible= false;
	view_userpic.visible=false;
	label_userid.top = '45%';
	textField_userid.top = '45%';
	btnCheckid.top = '45%';
});
textField_userid.addEventListener('return',function(e){
	textField_userupload.visible=true;
	btn5.visible= true;
	view_userpic.visible=true;
	label_userid.top = '50%';
	textField_userid.top = '50%';
	btnCheckid.top = '50%';
});

textField_userpasswd.addEventListener('click',function(e){
	textField_userupload.visible= false;
	btn5.visible= false;
	view_userpic.visible=false;
	label_userid.visible= false;
	textField_userid.visible= false;
	btnCheckid.visible= false;
	label_userpasswd.top= '45%';
	textField_userpasswd.top = '45%';
});

textField_userpasswd.addEventListener('return',function(e){
	textField_userupload.visible=true;
	btn5.visible=true;
	view_userpic.visible=true;
	label_userid.visible=true;
	textField_userid.visible=true;
	btnCheckid.visible=true;
	label_userpasswd.top= '58%';
	textField_userpasswd.top = '58%';
});

textField_userpasswd1.addEventListener('click',function(e){
	textField_userupload.visible= false;
	btn5.visible= false;
	view_userpic.visible=false;
	label_userid.visible= false;
	textField_userid.visible= false;
	label_userpasswd.visible= false;
	textField_userpasswd.visible= false;
	btnCheckid.visible= false;
	label_userpasswd1.top= '45%';
	textField_userpasswd1.top = '45%';
});
 
textField_userpasswd1.addEventListener('return',function(e){
	textField_userupload.visible=true;
	btn5.visible=true;
	view_userpic.visible=true;
	label_userid.visible=true;
	textField_userid.visible=true;
	label_userpasswd.visible=true;
	textField_userpasswd.visible=true;
	btnCheckid.visible=true;
	label_userpasswd1.top= '66%';
	textField_userpasswd1.top = '66%';
});

textField_username.addEventListener('click',function(e){
	textField_userupload.visible= false;
	btn5.visible= false;
	view_userpic.visible=false;
	label_userid.visible= false;
	textField_userid.visible= false;
	label_userpasswd.visible= false;
	textField_userpasswd.visible= false;
	btnCheckid.visible= false;
	label_userpasswd1.visible=false;
	textField_userpasswd1.visible=false;
	label_username.top='45%';
	textField_username.top ='45%';
});

textField_username.addEventListener('return',function(e){
	textField_userupload.visible=true;
	btn5.visible=true;
	view_userpic.visible=true;
	label_userid.visible=true;
	textField_userid.visible=true;
	label_userpasswd.visible=true;
	textField_userpasswd.visible=true;
	btnCheckid.visible=true;
	label_userpasswd1.visible=true;
	textField_userpasswd1.visible=true;
	label_username.top='74%';
	textField_username.top ='74%';
});

textField_userphone.addEventListener('click',function(e){
	textField_userupload.visible= false;
	btn5.visible= false;
	view_userpic.visible=false;
	label_userid.visible= false;
	textField_userid.visible= false;
	label_userpasswd.visible= false;
	textField_userpasswd.visible= false;
	btnCheckid.visible= false;
	label_userpasswd1.visible=false;
	textField_userpasswd1.visible=false;
	label_username.visible=false;
	textField_username.visible=false;
	label_userphone.top ='35%';
	textField_userphone.top='35%';
});

btnDoneTel.addEventListener('click',function(e){
	textField_userupload.visible=true;
	btn5.visible=true;
	view_userpic.visible=true;
	label_userid.visible=true;
	textField_userid.visible=true;
	label_userpasswd.visible=true;
	textField_userpasswd.visible=true;
	btnCheckid.visible=true;
	label_userpasswd1.visible=true;
	textField_userpasswd1.visible=true;
	label_username.visible=true;
	textField_username.visible=true;
	label_userphone.top ='82%';
	textField_userphone.top='82%';
});

textField_usermail.addEventListener('click',function(e){
	textField_userupload.visible= false;
	btn5.visible= false;
	view_userpic.visible=false;
	label_userid.visible= false;
	textField_userid.visible= false;
	label_userpasswd.visible= false;
	textField_userpasswd.visible= false;
	btnCheckid.visible= false;
	label_userpasswd1.visible=false;
	textField_userpasswd1.visible=false;
	label_username.visible=false;
	textField_username.visible=false;
	label_userphone.visible=false;
	textField_userphone.visible=false;
	label_usermail.top ='45%';
	textField_usermail.top ='45%';
});

textField_usermail.addEventListener('return',function(e){
	textField_userupload.visible=true;
	btn5.visible=true;
	view_userpic.visible=true;
	label_userid.visible=true;
	textField_userid.visible=true;
	label_userpasswd.visible=true;
	textField_userpasswd.visible=true;
	btnCheckid.visible=true;
	label_userpasswd1.visible=true;
	textField_userpasswd1.visible=true;
	label_username.visible=true;
	textField_username.visible=true;
	label_userphone.visible=true;
	textField_userphone.visible=true;
	label_usermail.top ='90%';
	textField_usermail.top ='90%';
});

var imageBlob; var imageDelete;
btn5.addEventListener('click', function(e){
	Ti.Media.openPhotoGallery({
		success:function(event){
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
				imageBlob = Ti.Utils.base64encode(event.media);
				imageDelete = event.media;
				btnInsert.visible = true;
			}
		},
		cancel:function(){ },
		error:function(err){
			Ti.API.info(err);
		},
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});
});

var insertReq = Ti.Network.createHTTPClient();

btnFinish.addEventListener('click', function(e)
{
	if(textField_userid.value != '' && textField_userpasswd.value != '' && textField_userpasswd.value == textField_userpasswd1.value && textField_usernamer.value != '' && textField_useremail.value != '' && textField_userphone != '')
	{
		insertReq.open("POST","http://140.138.142.203/Group_1/insert_member.php");
		var params = {
			dbusername: "Group1", 
			dbpassword: "Ti1358", 
			UserName:textField_userid.value,
			password:textField_userpasswd, 
			photo:imageBlob, 
			phone:textField_userphone,
			email:textField_useremail,
			name:textField_username,
		};
		insertReq.send(params);
		var dialog = Ti.UI.createAlertDialog({
            message:'註冊成功 ！', ok: '好的',
        }).show();
        tabGroup.activeTab= tab2;
	}
	else {
        var dialog = Ti.UI.createAlertDialog({
        	message:'註冊失敗 ！', ok: '再試一次！',
        }).show();
        textField_userupload.value='';
        textField_userid.value='';
        textField_userpasswd.value='';
        textField_userpasswd1.value='';
        textField_username.value='';
        textField_userphone.value='';
        textField_usermail.value='';
    }
	
});
