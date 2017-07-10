

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

var loginReq = Ti.Network.createHTTPClient();
	setData();


function setData(){
	loginReq.open("POST","http://140.138.142.203/Group_1/wanted.php");
	var params = {
		dbusername: "Group1", 
		dbpassword: "Ti1358",
	};
	loginReq.send(params);
		
	var table = Ti.UI.createTableView({
		height:'350', width: '300', top: '0', left:'10'
	});
	win1.add(table);
	
	var tableData = [];
	
	loginReq.onload = function(){
		var json = JSON.parse(this.responseText);
		Ti.API.info(json);
		for(var i=0;i<json.length;i++)
		{
			var row = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblbookName = Ti.UI.createLabel({
				text:json[i].wan_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'15', color:'black'
			});
			row.add(lblbookName);
			
			var lblboo_endtime = Ti.UI.createLabel({
				text:json[i].wan_endtime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row.add(lblboo_endtime);
			

			var imgwan_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row.add(imgwan_photo1);
							
			var base64img = json[i].wan_photo1;
			var imageBlob = Ti.Utils.base64decode(base64img);
			imgwan_photo1.image = imageBlob;
			
			var lblboo_description = Ti.UI.createLabel({
				text:json[i].wan_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'40', color:'black',width:300
			});
			row.add(lblboo_description);
			
			var lblboo_newprice = Ti.UI.createLabel({
				text:'原始價:'+json[i].wan_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json[i].wan_newprice
			});
			row.add(lblboo_newprice);
			

			var btncall = Ti.UI.createButton({
				top: 80,left:205,width: 70,
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