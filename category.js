var win_3 = Ti.UI.currentWindow;
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
win_3.setLeftNavButton(btnBack);
var btnInsert_photo =  Ti.UI.createButton({
	title:'新增'
});



var rowDate=[
	{name:'書籍'},
	{name:'上衣'},
	{name:'下著'},
	{name:'鞋子'},
	{name:'配件'},
	{name:'日常用品'},
];

var categoryRow=[];

for(i=0;i< rowDate.length;i++)
{
	var category = rowDate[i].name;
	var pickerRow_1 = Ti.UI.createPickerRow({title:category});
	categoryRow.push(pickerRow_1);
}
//create 轉向也可
var tr = Ti.UI.create2DMatrix();
tr = tr.rotate(90);

var btnDrop = Ti.UI.createButton({
	style: Ti.UI.iPhone.SystemButton.DISCLOSURE,
	transform:tr
});

var textField_category = Ti.UI.createTextField({
	left:'2%',top:'5%',width:'70%',height:'6%',
	hintText:'類別',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE,
	rightButton: btnDrop,
	rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS,
    color: '#336699' 
});

//create picker view
var pickerView = Ti.UI.createView({
	height:251,bottom:-251
});
var btnCancelPicker = Ti.UI.createButton({
	title:'Cancel' ,
	style: Ti.UI.iPhone.SystemButtonStyle.BORDERED 
});


var btnFlexSpace = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var btnDonePicker = Ti.UI.createButton({
	title:'Done',
	style: Ti.UI.iPhone.SystemButtonStyle.DONE
});

var tlbPicker = Ti.UI.createToolbar({
	top:0,
	items:[btnCancelPicker,btnFlexSpace,btnDonePicker]
});

var pickerCategory= Ti.UI.createPicker({
	top:43
});
pickerCategory.selectionIndicator=true;

pickerCategory.add(categoryRow);
pickerView.add(tlbPicker);
pickerView.add(pickerCategory);
win_3.add(pickerView);

var slideIn = Ti.UI.createAnimation({bottom:0});
var slideOut = Ti.UI.createAnimation({bottom:-251});


textField_category.addEventListener('focus',function(){
	pickerView.animate(slideOut);
});

btnDrop.addEventListener('click',function(){
	pickerView.animate(slideIn);
});

btnCancelPicker.addEventListener('click', function(){
	pickerView.animate(slideOut);
	
});
btnDonePicker.addEventListener('click', function(){
	textField_category.value = pickerCategory.getSelectedRow(0).title;
	pickerView.animate(slideOut);
});




var btn3 = Ti.UI.createButton({
	//left:232,top:303,width:40,
	left:'82%',top:'5%',width:'12%',height:'6%',
	backgroundColor:'#fff',
	title:'搜尋',
	
});
win_3.add(textField_category);

win_3.add(btn3);

var loginReq = Ti.Network.createHTTPClient();

btn3.addEventListener('click',function(e){
		setData();
});

var loginReq1 = Ti.Network.createHTTPClient();
var loginReq2 = Ti.Network.createHTTPClient();
var loginReq3 = Ti.Network.createHTTPClient();
var loginReq4 = Ti.Network.createHTTPClient();
var loginReq5 = Ti.Network.createHTTPClient();
var loginReq6 = Ti.Network.createHTTPClient();

function setData(){
		
	loginReq1.open("POST","http://140.138.142.203/Group_1/books.php");
	loginReq2.open("POST","http://140.138.142.203/Group_1/shoes.php");
	loginReq3.open("POST","http://140.138.142.203/Group_1/clothes.php");
	loginReq4.open("POST","http://140.138.142.203/Group_1/pants.php");
	loginReq5.open("POST","http://140.138.142.203/Group_1/daily.php");
	loginReq6.open("POST","http://140.138.142.203/Group_1/bags.php");
	
	var params = {
		dbusername: "Group1", 
		dbpassword: "Ti1358",
	};

if(pickerCategory.getSelectedRow(0).title == '書籍'){
 	loginReq1.send(params);
};
if(pickerCategory.getSelectedRow(0).title == '鞋子'){
	loginReq2.send(params);
};
if(pickerCategory.getSelectedRow(0).title == '上衣'){
	loginReq3.send(params);
};
if(pickerCategory.getSelectedRow(0).title == '下著'){
	loginReq4.send(params);
};
if(pickerCategory.getSelectedRow(0).title == '日常用品'){
	loginReq5.send(params);
};
if(pickerCategory.getSelectedRow(0).title == '配件'){
	loginReq6.send(params);
};
		
	var table = Ti.UI.createTableView({
		height:'350', width: '300', top: '20%', left:'10'
	});
	win_3.add(table);
	
	var tableData = [];
	

	//書開始

	loginReq1.onload = function(){
		var json = JSON.parse(this.responseText);
		Ti.API.info(json);
		for(var i=0;i<json.length;i++)
		{
			var row = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblbookName = Ti.UI.createLabel({
				text:json[i].boo_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row.add(lblbookName);
			
			var lblboo_endtime = Ti.UI.createLabel({
				text:json[i].boo_endtime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row.add(lblboo_endtime);
			
			var lblboo_place = Ti.UI.createLabel({
				text:'交易地點:'+json[i].boo_place, font:{fontSize:'15dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
			});
			row.add(lblboo_place);
			
			var imgboo_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row.add(imgboo_photo1);
							
			var base64img = json[i].boo_photo1;
			var imageBlob = Ti.Utils.base64decode(base64img);
			imgboo_photo1.image = imageBlob;
			
			var lblboo_description = Ti.UI.createLabel({
				text:json[i].boo_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'30', color:'black',width:300
			});
			row.add(lblboo_description);
			
			var lblboo_newprice = Ti.UI.createLabel({
				text:'原始價:'+json[i].boo_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json[i].boo_newprice
			});
			row.add(lblboo_newprice);
			
			var lblboo_oldprice = Ti.UI.createLabel({
				text:'欲售價:'+json[i].boo_oldprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'95', width:'300',color:'brown', prof: json[i].boo_oldprice
			});
			row.add(lblboo_oldprice);
			
			var btnlove = Ti.UI.createButton({
				top: 80,left: 80,width: 70,title:'+我的最愛',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row.add(btnlove);
			
			var btncall = Ti.UI.createButton({
				top: 80,left: 155,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall.addEventListener('click', function(e){
			    sentEmail();
			});
			row.add(btncall);
						
			var btndetail = Ti.UI.createButton({
				top: 80,left: 230,width: 70,
				title:'詳細資訊',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row.add(btndetail);
			
		    btndetail.addEventListener('click',function(e){
			    //windetail.open();
			}); 
			tableData.push(row);
		}
		table.setData(tableData);
	}; 
	

	//書結束
	
	//鞋子開始
loginReq2.onload = function(){
		var json2 = JSON.parse(this.responseText);
		Ti.API.info(json2);
		for(var i=0;i<json2.length;i++)
		{
			var row2 = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblshoesName = Ti.UI.createLabel({
				text:json2[i].sho_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row2.add(lblshoesName);
			
			var lblsho_updatetime = Ti.UI.createLabel({
				text:json2[i].sho_endtime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row2.add(lblsho_updatetime);
			
			var lblsho_place = Ti.UI.createLabel({
				text:'交易地點:'+json2[i].sho_place, font:{fontSize:'15dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
			});
			row2.add(lblsho_place);
			
			var imgsho_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row2.add(imgsho_photo1);
							
			var base64img2 = json2[i].sho_photo1;
			var imageBlob2 = Ti.Utils.base64decode(base64img2);
			imgsho_photo1.image = imageBlob2;
			
			var lblsho_description = Ti.UI.createLabel({
				text:json2[i].sho_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'30', color:'black',width:300
			});
			row2.add(lblsho_description);
			
			var lblsho_newprice = Ti.UI.createLabel({
				text:'原始價:'+json2[i].sho_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json2[i].sho_newprice
			});
			row2.add(lblsho_newprice);
			
			var lblsho_oldprice = Ti.UI.createLabel({
				text:'欲售價:'+json2[i].sho_oldprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'95', width:'300',color:'brown', prof: json2[i].sho_oldprice
			});
			row2.add(lblsho_oldprice);
			
			var btnlove2 = Ti.UI.createButton({
				top: 80,left: 80,width: 70,title:'+我的最愛',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row2.add(btnlove2);
			
			var btncall2 = Ti.UI.createButton({
				top: 80,left: 155,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall2.addEventListener('click', function(e){
			    sentEmail();
			});
			row2.add(btncall2);
						
			var btndetail2 = Ti.UI.createButton({
				top: 80,left: 230,width: 70,
				title:'詳細資訊',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row2.add(btndetail2);
			
		    btndetail2.addEventListener('click',function(e){
			    //windetail.open();
			}); 
			tableData.push(row2);
		}
		table.setData(tableData);
	};
	
	//鞋子結束
	

	//衣服開始

	loginReq3.onload = function(){
		var json3 = JSON.parse(this.responseText);
		Ti.API.info(json3);
		for(var i=0;i<json3.length;i++)
		{
			var row3 = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblclothesName = Ti.UI.createLabel({
				text:json3[i].clo_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row3.add(lblclothesName);
			
			var lblclo_endtime = Ti.UI.createLabel({
				text:json3[i].clo_updatetime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row3.add(lblclo_endtime);
			
			var lblclo_place = Ti.UI.createLabel({
				text:'交易地點:'+json3[i].clo_place, font:{fontSize:'15dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
			});
			row3.add(lblclo_place);
			
			var imgclo_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row3.add(imgclo_photo1);
							
			var base64img3 = json3[i].clo_photo1;
			var imageBlob3 = Ti.Utils.base64decode(base64img3);
			imgclo_photo1.image = imageBlob3;
			
			var lblclo_description = Ti.UI.createLabel({
				text:json3[i].clo_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'30', color:'black',width:300
			});
			row3.add(lblclo_description);
			
			var lblclo_newprice = Ti.UI.createLabel({
				text:'原始價:'+json3[i].clo_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json3[i].clo_newprice
			});
			row3.add(lblclo_newprice);
			
			var lblclo_oldprice = Ti.UI.createLabel({
				text:'欲售價:'+json3[i].clo_oldprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'95', width:'300',color:'brown', prof: json3[i].clo_oldprice
			});
			row3.add(lblclo_oldprice);
			
			var btnlove3 = Ti.UI.createButton({
				top: 80,left: 80,width: 70,title:'+我的最愛',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row3.add(btnlove3);
			
			var btncall3 = Ti.UI.createButton({
				top: 80,left: 155,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall3.addEventListener('click', function(e){
			    sentEmail();
			});
			row3.add(btncall3);
						
			var btndetail3 = Ti.UI.createButton({
				top: 80,left: 230,width: 70,
				title:'詳細資訊',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row3.add(btndetail3);
			
		    btndetail3.addEventListener('click',function(e){
			    //windetail.open();
			}); 
			tableData.push(row3);
		}
		table.setData(tableData);
	};

	//衣服結束
	
	//褲子開始

		loginReq4.onload = function(){
		var json4 = JSON.parse(this.responseText);
		Ti.API.info(json4);
		for(var i=0;i<json4.length;i++)
		{
			var row4 = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblpantsName = Ti.UI.createLabel({
				text:json4[i].pan_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row4.add(lblpantsName);
			
			var lblpan_endtime = Ti.UI.createLabel({
				text:json4[i].pan_updatetime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row4.add(lblpan_endtime);
			
			var lblpan_place = Ti.UI.createLabel({
				text:'交易地點:'+json4[i].pan_place, font:{fontSize:'15dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
			});
			row4.add(lblpan_place);
			
			var imgpan_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row4.add(imgpan_photo1);
							
			var base64img4 = json4[i].pan_photo1;
			var imageBlob4 = Ti.Utils.base64decode(base64img4);
			imgpan_photo1.image = imageBlob4;
			
			var lblpan_description = Ti.UI.createLabel({
				text:json4[i].pan_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'30', color:'black',width:300
			});
			row4.add(lblpan_description);
			
			var lblpan_newprice = Ti.UI.createLabel({
				text:'原始價:'+json4[i].pan_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json4[i].pan_newprice
			});
			row4.add(lblpan_newprice);
			
			var lblpan_oldprice = Ti.UI.createLabel({
				text:'欲售價:'+json4[i].pan_oldprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'95', width:'300',color:'brown', prof: json4[i].pan_oldprice
			});
			row4.add(lblpan_oldprice);
			
			var btnlove4 = Ti.UI.createButton({
				top: 80,left: 80,width: 70,title:'+我的最愛',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row4.add(btnlove4);
			
			var btncall4 = Ti.UI.createButton({
				top: 80,left: 155,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall4.addEventListener('click', function(e){
			    sentEmail();
			});
			row4.add(btncall4);
						
			var btndetail4 = Ti.UI.createButton({
				top: 80,left: 230,width: 70,
				title:'詳細資訊',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row4.add(btndetail4);
			
		    btndetail4.addEventListener('click',function(e){
			    //windetail.open();
			}); 
			tableData.push(row4);
		}
		table.setData(tableData);
	};
	
	//褲子結束
	
	//日常生活開始

	loginReq5.onload = function(){
		var json5 = JSON.parse(this.responseText);
		Ti.API.info(json5);
		for(var i=0;i<json5.length;i++)
		{
			var row5 = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lbldailyName = Ti.UI.createLabel({
				text:json5[i].dai_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row5.add(lbldailyName);
			
			var lbldai_updatetime = Ti.UI.createLabel({
				text:json5[i].dai_updatetime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row5.add(lbldai_updatetime);
			
			var lbldai_place = Ti.UI.createLabel({
				text:'交易地點:'+json5[i].dai_place, font:{fontSize:'15dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
			});
			row5.add(lbldai_place);
			
			var imgdai_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row5.add(imgdai_photo1);
							
			var base64img5 = json5[i].dai_photo1;
			var imageBlob5 = Ti.Utils.base64decode(base64img5);
			imgdai_photo1.image = imageBlob5;
			
			var lbldai_description = Ti.UI.createLabel({
				text:json5[i].dai_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'30', color:'black',width:300
			});
			row5.add(lbldai_description);
			
			var lbldai_newprice = Ti.UI.createLabel({
				text:'原始價:'+json5[i].dai_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json5[i].dai_newprice
			});
			row5.add(lbldai_newprice);
			
			var lbldai_oldprice = Ti.UI.createLabel({
				text:'欲售價:'+json5[i].dai_oldprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'95', width:'300',color:'brown', prof: json5[i].dai_oldprice
			});
			row5.add(lbldai_oldprice);
			
			var btnlove5 = Ti.UI.createButton({
				top: 80,left: 80,width: 70,title:'+我的最愛',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row5.add(btnlove5);
			
			var btncall5 = Ti.UI.createButton({
				top: 80,left: 155,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall5.addEventListener('click', function(e){
			    sentEmail();
			});
			row5.add(btncall5);
						
			var btndetail5 = Ti.UI.createButton({
				top: 80,left: 230,width: 70,
				title:'詳細資訊',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row5.add(btndetail5);
			
		    btndetail5.addEventListener('click',function(e){
			    //windetail.open();
			}); 
			tableData.push(row5);
		}
		table.setData(tableData);
	};
	
	//日常生活結束
	
	//包包開始

	loginReq6.onload = function(){
		var json6 = JSON.parse(this.responseText);
		Ti.API.info(json6);
		for(var i=0;i<json6.length;i++)
		{
			var row6 = Ti.UI.createTableViewRow({
				height:'110'
			});
			
			var lblbagsName = Ti.UI.createLabel({
				text:json6[i].bag_name ,
				font:{fontSize:'22dp',fontWeight:'bold'},
				left:'80', top:'0', color:'black'
			});
			row6.add(lblbagsName);
			
			var lblbag_updatetime = Ti.UI.createLabel({
				text:json6[i].bag_updatetime ,
				font:{fontSize:'12dp',fontWeight:'bold'},
				right:'3%', top:'0', color:'black'
			});
			row6.add(lblbag_updatetime);
			
			var lblbag_place = Ti.UI.createLabel({
				text:'交易地點:'+json6[i].bag_place, font:{fontSize:'15dp',fontWeight:'bold'},
				left:'80', top:'55', width:'235', color:'black'
			});
			row6.add(lblbag_place);
			
			var imgbag_photo1 = Ti.UI.createImageView({
				top:'5', left:'5', width:'70', height:'70'
			});
			row6.add(imgbag_photo1);
							
			var base64img6 = json6[i].bag_photo1;
			var imageBlob6 = Ti.Utils.base64decode(base64img6);
			imgbag_photo1.image = imageBlob6;
			
			var lblbag_description = Ti.UI.createLabel({
				text:json6[i].bag_description, font:{fontSize:'18dp',fontWeight:'bold'},
				left:'80', top:'30', color:'black',width:300
			});
			row6.add(lblbag_description);
			
			var lblbag_newprice = Ti.UI.createLabel({
				text:'原始價:'+json6[i].bag_newprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'80', width:'300',color:'brown', prof: json6[i].bag_newprice
			});
			row6.add(lblbag_newprice);
			
			var lblbag_oldprice = Ti.UI.createLabel({
				text:'欲售價:'+json6[i].bag_oldprice, font:{fontSize:'12dp',fontWeight:'bold'},
				left:'5', top:'95', width:'300',color:'brown', prof: json6[i].bag_oldprice
			});
			row6.add(lblbag_oldprice);
			
			var btnlove6 = Ti.UI.createButton({
				top: 80,left: 80,width: 70,title:'+我的最愛',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row6.add(btnlove6);
			
			var btncall6 = Ti.UI.createButton({
				top: 80,left: 155,width: 70,
				title:'聯絡賣家',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
		    btncall6.addEventListener('click', function(e){
			    sentEmail();
			});
			row6.add(btncall6);
						
			var btndetail6 = Ti.UI.createButton({
				top: 80,left: 230,width: 70,
				title:'詳細資訊',font:{fontSize:'10dp',fontWeight:'bold',color:'#000033'}
			});
			row6.add(btndetail6);
			
		    btndetail6.addEventListener('click',function(e){
			    //windetail.open();
			}); 
			tableData.push(row6);
		}
		table.setData(tableData);
	};
	
	//包包結束
};  
//搜尋MYSQL結束