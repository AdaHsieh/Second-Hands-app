var win1 = Ti.UI.currentWindow;
var tabGroup = Titanium.UI.createTabGroup();

var btnBack = Ti.UI.createButton({
	title:'返回',
});
btnBack.addEventListener('click',function(e){

    var wina = Ti.UI.createWindow({
    	title:'個人化設定',
    	backgroundColor:'#fff',
    	url:'setting.js',
    });
    var tab1 = Titanium.UI.createTab({  
    	icon:'KS_nav_views.png',
   		title:'個人化設定',
   		window:wina
	});
	tabGroup.addTab(tab1); 
	tabGroup.open();
});
win1.setLeftNavButton(btnBack);

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
		height:'350', width: '300', top: '0', left:'10'
	});
	win1.add(table);
	
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
				text:'聯絡電話: '+json[i].phone, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
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
				left:'80', top:'30', color:'black',width:300
			});
			row.add(lblemail);
			
			
			var btncall = Ti.UI.createButton({
				top: 80,left: 200,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall.addEventListener('click', function(e){
			    sentEmail();
			});
			row.add(btncall);
 
			tableData.push(row);
		}
		table.setData(tableData);
	}; 
};

function sentEmail(){
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = 'I want to buy this one';
	emailDialog.toRecipients = ['abc111@gmail.com'];
	emailDialog.open();
};