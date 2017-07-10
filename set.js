var win_5 = Ti.UI.currentWindow;
var tabGroup = Titanium.UI.createTabGroup();

var a = 'Ada';
var b = 'aaa';

var btnUpdate =  Ti.UI.createButton({
	title:'修改'
});
var btnBack = Ti.UI.createButton({
	title:'返回',
});
btnBack.addEventListener('click',function(e){

    var wina = Ti.UI.createWindow({
    	title:'修改個人資料',
    	backgroundColor:'#fff',
    	url:'setting.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'修改個人資料',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});
win_5.setLeftNavButton(btnBack);
win_5.setRightNavButton(btnUpdate);


var label_userpasswd = Ti.UI.createLabel({
	left:'5%',top:'58%',width:'30%',height:'6%',
	text:'原始密碼：'
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
	text:'更新密碼：'
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

var label_userpasswd2 = Ti.UI.createLabel({
	left:'5%',top:'74%',width:'40%',height:'6%',
	text:'確認密碼：'
});
win_5.add(label_userpasswd2);

var textField_userpasswd2 = Ti.UI.createTextField({
	left:'30%',top:'74%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	returnKeyType: Ti.UI.RETURNKEY_DONE,
});
win_5.add(textField_userpasswd2);


var btnDoneTel = Ti.UI.createButton({
	title: 'Done',
	width: 100,
	style: Ti.UI.iPhone.SystemButtonStyle.DONE,
	
});
btnDoneTel.addEventListener('click', function(e){
	textField_userphone.blur();
});
var btnFlexSpace = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


//為了在輸入時可看到每個欄位


textField_userpasswd.addEventListener('click',function(e){
	
	
	label_userpasswd.top= '45%';
	textField_userpasswd.top = '45%';
});

textField_userpasswd.addEventListener('return',function(e){
	
	label_userpasswd.top= '58%';
	textField_userpasswd.top = '58%';
});

textField_userpasswd1.addEventListener('click',function(e){
	
	label_userpasswd.visible= false;
	textField_userpasswd.visible= false;
	
	label_userpasswd1.top= '45%';
	textField_userpasswd1.top = '45%';
});
 
textField_userpasswd1.addEventListener('return',function(e){
	
	label_userpasswd.visible=true;
	textField_userpasswd.visible=true;	
	label_userpasswd1.top= '66%';
	textField_userpasswd1.top = '66%';
});

textField_userpasswd2.addEventListener('click',function(e){
	
	label_userpasswd.visible= false;
	textField_userpasswd.visible= false;
	label_userpasswd1.visible=false;
	textField_userpasswd1.visible=false;
	label_userpasswd2.top='45%';
	textField_userpasswd2.top ='45%';
});

textField_userpasswd2.addEventListener('return',function(e){
	
	label_userpasswd.visible=true;
	textField_userpasswd.visible=true;
	label_userpasswd1.visible=true;
	textField_userpasswd1.visible=true;
	label_userpasswd2.top='74%';
	textField_userpasswd2.top ='74%';
});



var loginReq1 = Ti.Network.createHTTPClient();
	setData();

//搜尋MYSQL開始
function setData(){
	loginReq1.open("POST","http://140.138.142.203/Group_1/member.php");
	
	var params = {
		dbusername: "Group1", 
		dbpassword: "Ti1358",
	};
	loginReq1.send(params);

	var table = Ti.UI.createTableView({
		height:'350', width: '300', top: '20', left:'10' , height: '110'
	});
	win_5.add(table);
	
	var tableData = [];
	
	loginReq1.onload = function(){
		var json = JSON.parse(this.responseText);
		Ti.API.info(json);
		for(var i=0;i<json.length;i++)
		{
			var row = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblname = Ti.UI.createLabel({
				text:json[i].name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row.add(lblname);
			
			
			var lblphone = Ti.UI.createLabel({
				text:'聯絡電話:'+json[i].phone, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'75', width:'235', color:'black'
			});
			row.add(lblphone);
			
			var photo = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'90'
			});
			row.add(photo);
							
			var base64img = json[i].photo;
			var imageBlob = Ti.Utils.base64decode(base64img);
			photo.image = imageBlob;
			
			var lblemail = Ti.UI.createLabel({
				text:json[i].email, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'50', color:'black',width:'300'
			});
			row.add(lblemail);
			
			var lblepasswd = Ti.UI.createLabel({
				text:json[i].password,
				left:'80', top:'25', color:'black',width:'30'
			});
			row.add(lblepasswd);
			tableData.push(row);
		}
		table.setData(tableData);
		
		lblepasswd.addEventListener('click',function(e){
			textField_userpasswd.value = e.source.text;
		});
		
		btnUpdate.addEventListener('click',function(e){
			
			if (textField_userpasswd1.value == textField_userpasswd2.value && textField_userpasswd1.value != '') {
				var updateReq = Ti.Network.createHTTPClient();
				updateReq.open("POST", "http://140.138.142.203/Group_1/update_member.php");
				var params = {
					dbusername: "Group1", 
					dbpassword: "Ti1358",
					password: textField_userpasswd1.value };
				};
					updateReq.send(params);
					tableData=[];
					setData();
					tableData.push(row);
					table.setData(tableData);
					lblepasswd.text = textField_userpasswd2.value;
			});
      };
};