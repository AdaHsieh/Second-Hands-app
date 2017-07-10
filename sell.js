var win_4 = Ti.UI.currentWindow;
var tabGroup = Titanium.UI.createTabGroup();

var btnInsert_photo =  Ti.UI.createButton({
	title:'新增'
});
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
win_4.setLeftNavButton(btnBack);
win_4.setRightNavButton(btnInsert_photo);

var label_name = Ti.UI.createLabel({
	left:'10%',top:'15%',width:'35%',height:'6%',
	text:'商品名稱：'
});
win_4.add(label_name);

var textField_name = Ti.UI.createTextField({
	left:'35%',top:'15%',width:'50%',
	height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE,
    color: '#336699',
});
win_4.add(textField_name);

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
var label_type = Ti.UI.createLabel({
	left:'10%',top:'23%',width:'20%',height:'6%',
	text:'類別：'
});
win_4.add(label_type);

var tr = Ti.UI.create2DMatrix();
tr = tr.rotate(90);

var btnDropType = Ti.UI.createButton({
	style: Ti.UI.iPhone.SystemButton.DISCLOSURE,
	transform:tr
});

var textField_type = Ti.UI.createTextField({
	left:'35%',top:'23%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE,
	rightButton: btnDropType,
	rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS,
    color: '#336699',
});

win_4.add(textField_type);
var tr = Ti.UI.create2DMatrix();
tr = tr.rotate(90);
var pickerViewType = Ti.UI.createView({
	height:180,bottom:-180
});

var btnCancelPickerType = Ti.UI.createButton({
	title:'Cancel' ,
	style: Ti.UI.iPhone.SystemButtonStyle.BORDERED
});

var btnFlexSpaceType = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var btnDonePickerType = Ti.UI.createButton({
	title:'Done',
	style: Ti.UI.iPhone.SystemButtonStyle.DONE
});

var tlbPickerType = Ti.UI.createToolbar({
	top:0,
	items:[btnCancelPickerType,btnFlexSpaceType,btnDonePickerType]
});

var pickerType= Ti.UI.createPicker({
	top:43
});
pickerType.selectionIndicator=true;
pickerType.add(categoryRow);

pickerViewType.add(tlbPickerType);
pickerViewType.add(pickerType);
win_4.add(pickerViewType);

var slideIn = Ti.UI.createAnimation({bottom:0});
var slideOut = Ti.UI.createAnimation({bottom:-251});


textField_type.addEventListener('focus',function(){
	pickerViewType.animate(slideOut);
	label_description.visible=false;
	textField_description.visible=false;
});

btnDropType.addEventListener('click',function(){
	pickerViewType.animate(slideIn);
	label_description.visible=false;
	textField_description.visible=false;
});

btnCancelPickerType.addEventListener('click', function(){
	pickerViewType.animate(slideOut);
});

btnDonePickerType.addEventListener('click', function(){
	textField_type.value = pickerType.getSelectedRow(0).title;
	pickerViewType.animate(slideOut);
	label_description.visible= true;
	textField_description.visible= true;
});

var label_money1 = Ti.UI.createLabel({
	left:'10%',top:'31%',width:'23%',height:'6%',
	text:'原始價：'
});
win_4.add(label_money1);

var textField_money1 = Ti.UI.createTextField({
	left:'31%',top:'31%',width:'18%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
});
win_4.add(textField_money1);

var label_money2 = Ti.UI.createLabel({
	left:'50%',top:'31%',width:'23%',height:'6%',
	text:'欲售價：'
});
win_4.add(label_money2);

var textField_money2 = Ti.UI.createTextField({
	left:'71%',top:'31%',width:'18%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType: Ti.UI.RETURNKEY_DONE,
});

win_4.add(textField_money2);



var rowDatePlace=[
	{name:'一館郵局'},
	{name:'二館大門口'},
	{name:'三館大門口'},
	{name:'五館全家'},
	{name:'六館大門口'},
	{name:'七館大門口'},
	{name:'女一宿門口'},
	{name:'女二宿門口'},
	{name:'男一宿門口'},
	{name:'男二宿門口'},
	{name:'宿舍區全家'},
	{name:'元智校門口'},
];

var PlaceRow=[];
for(i=0;i< rowDatePlace.length;i++)
{
	var Place =rowDatePlace[i].name;
	var pickerRow_2 = Ti.UI.createPickerRow({title:Place});
	PlaceRow.push(pickerRow_2);
}
//create 轉向也可
var tr = Ti.UI.create2DMatrix();
tr = tr.rotate(90);

var label_place = Ti.UI.createLabel({
	left:'10%',top:'39%',width:'40%',height:'6%',
	text:'面交地點：'
});
win_4.add(label_place);
var btnDropPlace = Ti.UI.createButton({
	style: Ti.UI.iPhone.SystemButton.DISCLOSURE,
	transform:tr
});
var textField_place = Ti.UI.createTextField({
	left:'35%',top:'39%',width:'50%',height:'6%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE,
	rightButton: btnDropPlace,
	rightButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS,
	color: '#336699',
});

var pickerViewPlace = Ti.UI.createView({
	height:180,bottom:-180
});
var btnCancelPickerPlace = Ti.UI.createButton({
	title:'Cancel' ,
	style: Ti.UI.iPhone.SystemButtonStyle.BORDERED
});

var btnFlexSpacePlace = Ti.UI.createButton({
	systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var btnDonePickerPlace = Ti.UI.createButton({
	title:'Done',
	style: Ti.UI.iPhone.SystemButtonStyle.DONE,
	
});

var tlbPickerPlace = Ti.UI.createToolbar({
	top:0,
	items:[btnCancelPickerPlace,btnFlexSpacePlace,btnDonePickerPlace]
});

var pickerPlace= Ti.UI.createPicker({
	top:43
});
pickerPlace.selectionIndicator=true;

pickerPlace.add(PlaceRow);
pickerViewPlace.add(tlbPickerPlace);
pickerViewPlace.add(pickerPlace);
win_4.add(pickerViewPlace);

var slideIn = Ti.UI.createAnimation({bottom:0});
var slideOut = Ti.UI.createAnimation({bottom:-251});

textField_place.addEventListener('focus',function(){
	pickerViewPlace.animate(slideOut);
	label_description.visible=false;
	textField_description.visible=false;
});

btnDropPlace.addEventListener('click',function(){
	pickerViewPlace.animate(slideIn);
	label_description.visible=false;
	textField_description.visible=false;
});

btnCancelPickerPlace.addEventListener('click', function(){
	pickerViewPlace.animate(slideOut);
});

btnDonePickerPlace.addEventListener('click', function(){
	textField_place.value = pickerPlace.getSelectedRow(0).title;
	pickerViewPlace.animate(slideOut);
	label_description.visible= true;
	textField_description.visible=true;
});
win_4.add(textField_place);

var label_description = Ti.UI.createLabel({
	left:'10%',top:'47%',width:'35%',height:'6%',
	text:'商品敘述：'
});
win_4.add(label_description);

var textField_description = Ti.UI.createTextField({
	left:'35%',top:'47%',width:'50%',
	height:'15%',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DONE,
    color: '#336699',
});
win_4.add(textField_description);

textField_description.addEventListener('click',function(e){
	textField_name.visible=false;
	textField_money2.visible=false;
	textField_money1.visible=false;
	textField_place.visible=false;
	textField_type.visible=false;
	label_name.visible=false;
	label_money2.visible=false;
	label_money1.visible=false;
	label_place.visible=false;
	label_type.visible=false;
	label_description.top='30%';
	textField_description.top='30%';
});

textField_description.addEventListener('return',function(e){
	textField_name.visible = true;
	textField_money1.visible = true;
	textField_money2.visible = true;
	textField_place.visible = true;
	textField_type.visible = true;
	label_name.visible = true;
	label_money2.visible = true;
	label_money1.visible = true;
	label_place.visible = true;
	label_type.visible = true;
	label_description.top='47%';
	textField_description.top='47%';
});

var btnInsert = Ti.UI.createButton({
	left:'70%',top:'5%',width:'25%',height:'6%',
	backgroundColor:'#fff',
	title:'上傳照片',
}); 
win_4.add(btnInsert);

var imageBlob; 
var imageDelete;
	
btnInsert.addEventListener('click',function(e){

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
btnInsert_photo.addEventListener('click', function(e){ 
	if(textField_name.value != '' && 
	textField_type.value != '' && textField_money2.value != '' 
	&& textField_money1.value != '' && textField_place.value != '' &&
	textField_description.value != '')
	{
		insertReq.open("POST","http://140.138.142.203/Group_1/insert_member.php");
		var params = {
			dbusername: "Group1",
			dbpassword: "Ti1358", 
			boo_number:'',
			boo_name:textField_name.value, 
			boo_newprice:textField_money1.value,
			boo_oldprice:textField_money2.value,
			boo_place:textField_place.value,
			boo_description:textField_description,
			boo_photo1:imageBlob,
			boo_photo2:imageBlob,
			boo_photo3:imageBlob,
			boo_photo4:imageBlob,
			boo_endtime:getDate(),
			boo_category:textField_type.value,
		};
		insertReq.send(params);
	
		var dialog = Ti.UI.createAlertDialog({
	 		message:'新增成功 !', ok: '好的',
		}).show();
	
	textField_name.value='';
	textField_money2.value='';
	textField_money1.value='';
	textField_place.value='';
	textField_type.value='';
	textField_description.value='';
		}
    else{
    	var dialog = Ti.UI.createAlertDialog({
	 		message:'請填寫完整商品資訊 !', ok: '好的',
		}).show();
    };
	});

		
	

function getDate(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
 
    return hours +":"+minutes + " - "+day+"/"+month+"/"+year;
}