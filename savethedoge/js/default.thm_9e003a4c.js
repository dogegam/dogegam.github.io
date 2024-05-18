window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Scene.Eat.Main":"resource/eui_skins/eat/Main.exml","Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Pause":"resource/eui_skins/Pause.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Cover.LvBtn":"resource/eui_skins/cover/LvBtn.exml","Scene.Common":"resource/eui_skins/Common.exml","Scene.Love.Main":"resource/eui_skins/love/Main.exml"};generateEUI.paths['resource/eui_skins/AdMask.exml'] = window.skins.AdMask = (function (_super) {
	__extends(AdMask, _super);
	function AdMask() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i()];
	}
	var _proto = AdMask.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "adicon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 81.824;
		t.horizontalCenter = 0;
		t.size = 50;
		t.stroke = 3;
		t.text = "Loading";
		t.textAlign = "center";
		t.verticalCenter = 109;
		t.width = 262.64;
		return t;
	};
	return AdMask;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = ["lbl_power","lbl_powerTime","grp_power","grp_top","grp_moregame"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.grp_top_i(),this.grp_moregame_i()];
	}
	var _proto = Common.prototype;

	_proto.grp_top_i = function () {
		var t = new eui.Group();
		this.grp_top = t;
		t.height = 50;
		t.left = 40;
		t.verticalCenter = -390;
		t.width = 330;
		t.elementsContent = [this.grp_power_i()];
		return t;
	};
	_proto.grp_power_i = function () {
		var t = new eui.Group();
		this.grp_power = t;
		t.height = 50;
		t.horizontalCenter = -65;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this.lbl_power_i(),this.lbl_powerTime_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.left = -40;
		t.rotation = -20;
		t.source = "game0_json.bone_png";
		t.touchEnabled = false;
		t.verticalCenter = -5;
		t.width = 80;
		return t;
	};
	_proto.lbl_power_i = function () {
		var t = new eui.Label();
		this.lbl_power = t;
		t.height = 38;
		t.left = 40;
		t.right = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.y = 6;
		return t;
	};
	_proto.lbl_powerTime_i = function () {
		var t = new eui.Label();
		this.lbl_powerTime = t;
		t.height = 38;
		t.left = 120;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "1:30 +1";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.x = 50;
		t.y = 16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.video2_png";
		t.touchEnabled = false;
		t.verticalCenter = -21;
		return t;
	};
	_proto.grp_moregame_i = function () {
		var t = new eui.Group();
		this.grp_moregame = t;
		t.height = 80;
		t.horizontalCenter = 250;
		t.verticalCenter = 390;
		t.visible = false;
		t.width = 80;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "moregame_png";
		t.touchEnabled = false;
		t.verticalCenter = -10;
		t.width = 80;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.text = "More Game";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.width = 93;
		return t;
	};
	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/LvBtn.exml'] = window.skins.LvBtn = (function (_super) {
	__extends(LvBtn, _super);
	function LvBtn() {
		_super.call(this);
		this.skinParts = ["lbl_lv","img_lock","img_star0","img_star2","img_star1","img_power","lbl_power"];
		
		this.height = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this.lbl_lv_i(),this.img_lock_i(),this.img_star0_i(),this.img_star2_i(),this.img_star1_i(),this.img_power_i(),this.lbl_power_i()];
	}
	var _proto = LvBtn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.btn_skip_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = -119;
		t.y = -25;
		return t;
	};
	_proto.lbl_lv_i = function () {
		var t = new eui.Label();
		this.lbl_lv = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0x059CC9;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 4;
		t.width = 90;
		return t;
	};
	_proto.img_lock_i = function () {
		var t = new eui.Image();
		this.img_lock = t;
		t.height = 62;
		t.horizontalCenter = 0;
		t.source = "uiart_json.lock_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 52;
		return t;
	};
	_proto.img_star0_i = function () {
		var t = new eui.Image();
		this.img_star0 = t;
		t.height = 38;
		t.horizontalCenter = -40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.star2_png";
		t.touchEnabled = false;
		t.verticalCenter = 45;
		t.width = 40;
		return t;
	};
	_proto.img_star2_i = function () {
		var t = new eui.Image();
		this.img_star2 = t;
		t.height = 38;
		t.horizontalCenter = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.star2_png";
		t.touchEnabled = false;
		t.verticalCenter = 45;
		t.width = 40;
		return t;
	};
	_proto.img_star1_i = function () {
		var t = new eui.Image();
		this.img_star1 = t;
		t.height = 38;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.star2_png";
		t.touchEnabled = false;
		t.verticalCenter = 50;
		t.width = 40;
		return t;
	};
	_proto.img_power_i = function () {
		var t = new eui.Image();
		this.img_power = t;
		t.anchorOffsetX = 15;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.horizontalCenter = 19;
		t.rotation = -20;
		t.source = "game0_json.bone_png";
		t.touchEnabled = false;
		t.verticalCenter = -50;
		t.width = 30;
		return t;
	};
	_proto.lbl_power_i = function () {
		var t = new eui.Label();
		this.lbl_power = t;
		t.height = 35.745;
		t.horizontalCenter = 54.5;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "-3";
		t.textAlign = "left";
		t.touchEnabled = false;
		t.verticalAlign = "bottom";
		t.verticalCenter = -50;
		t.width = 47.188;
		return t;
	};
	return LvBtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["img_bee0","img_bee1","img_bee2","grp_start","img_love_ad","grp_love","rt_level","img_close","img_leftPage","grp_leftPage","img_rightPage","grp_rightPage","grp_levels","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.grp_main_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 640;
		t.elementsContent = [this._Group1_i(),this.grp_start_i(),this.grp_love_i(),this.rt_level_i(),this.grp_levels_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -86;
		t.visible = true;
		t.width = 463;
		t.x = 89.00000000000011;
		t.y = 264;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.img_bee0_i(),this.img_bee1_i(),this.img_bee2_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cover0_json.title_4_png";
		t.verticalCenter = 38;
		t.x = 163.00000000000006;
		t.y = 147.9999999999999;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "title_png";
		t.verticalCenter = -140;
		t.x = 272.99999999999994;
		t.y = 26.999999999999943;
		return t;
	};
	_proto.img_bee0_i = function () {
		var t = new eui.Image();
		this.img_bee0 = t;
		t.horizontalCenter = -61.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cover0_json.title_1_png";
		t.verticalCenter = -151;
		return t;
	};
	_proto.img_bee1_i = function () {
		var t = new eui.Image();
		this.img_bee1 = t;
		t.horizontalCenter = 39.5;
		t.source = "cover0_json.title_2_png";
		t.verticalCenter = -90.5;
		return t;
	};
	_proto.img_bee2_i = function () {
		var t = new eui.Image();
		this.img_bee2 = t;
		t.horizontalCenter = -152;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cover0_json.title_3_png";
		t.verticalCenter = 42;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -220;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cover0_json.title_0_png";
		t.verticalCenter = -149.5;
		t.x = -47;
		t.y = -106.99999999999994;
		return t;
	};
	_proto.grp_start_i = function () {
		var t = new eui.Group();
		this.grp_start = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 181;
		t.width = 300;
		t.y = 587.9999999999999;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "uiart_json.btn_green_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 85;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "Start Game";
		t.textAlign = "center";
		t.textColor = 0x0C2500;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 285;
		return t;
	};
	_proto.grp_love_i = function () {
		var t = new eui.Group();
		this.grp_love = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 319;
		t.visible = true;
		t.width = 300;
		t.elementsContent = [this._Image6_i(),this._Label2_i(),this._Image7_i(),this.img_love_ad_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.source = "uiart_json.btn_red_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 85;
		t.horizontalCenter = 57;
		t.size = 50;
		t.text = "Love";
		t.textAlign = "center";
		t.textColor = 0x0C2500;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 166;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -74;
		t.source = "game1_json.love_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.img_love_ad_i = function () {
		var t = new eui.Image();
		this.img_love_ad = t;
		t.bottom = 0;
		t.height = 30;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "adicon_png";
		t.touchEnabled = false;
		t.width = 36;
		return t;
	};
	_proto.rt_level_i = function () {
		var t = new eui.Rect();
		this.rt_level = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = -200;
		t.visible = false;
		t.x = 0;
		t.y = -200;
		return t;
	};
	_proto.grp_levels_i = function () {
		var t = new eui.Group();
		this.grp_levels = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchThrough = true;
		t.verticalCenter = 18;
		t.visible = false;
		t.width = 550;
		t.x = 45.000000000000114;
		t.y = 266;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label3_i(),this.img_close_i(),this.grp_leftPage_i(),this.grp_rightPage_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,61,62,62);
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "uiart_json.bg_box2_png";
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 67.402;
		t.horizontalCenter = 0.5;
		t.source = "uiart_json.tab_choose_png";
		t.top = -47;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 72;
		t.horizontalCenter = 1;
		t.size = 36;
		t.text = "Select Level";
		t.textAlign = "center";
		t.textColor = 0x272727;
		t.top = -46;
		t.verticalAlign = "middle";
		t.width = 260;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.height = 100;
		t.horizontalCenter = 252.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.close_png";
		t.verticalCenter = -326;
		t.width = 100;
		return t;
	};
	_proto.grp_leftPage_i = function () {
		var t = new eui.Group();
		this.grp_leftPage = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = -180;
		t.touchChildren = false;
		t.verticalCenter = 223;
		t.width = 100;
		t.elementsContent = [this.img_leftPage_i()];
		return t;
	};
	_proto.img_leftPage_i = function () {
		var t = new eui.Image();
		this.img_leftPage = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.arrow_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto.grp_rightPage_i = function () {
		var t = new eui.Group();
		this.grp_rightPage = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 180;
		t.touchChildren = false;
		t.verticalCenter = 223;
		t.width = 100;
		t.x = 105;
		t.y = 553;
		t.elementsContent = [this.img_rightPage_i()];
		return t;
	};
	_proto.img_rightPage_i = function () {
		var t = new eui.Image();
		this.img_rightPage = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "uiart_json.arrow_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/InkBar.exml'] = window.skins.InkBar = (function (_super) {
	__extends(InkBar, _super);
	function InkBar() {
		_super.call(this);
		this.skinParts = ["thumb","img_star0","img_star1","img_star2"];
		
		this.height = 26;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Image1_i(),this.thumb_i(),this.img_star0_i(),this.img_star1_i(),this.img_star2_i()];
	}
	var _proto = InkBar.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 26;
		t.ellipseWidth = 26;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 3;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.left = 3;
		t.right = 3;
		t.top = 3;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(24,0,213,25);
		t.source = "uiart_json.sensitivity_bg_png";
		t.verticalCenter = 0;
		t.width = 400;
		t.x = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(25,0,208,19);
		t.source = "uiart_json.sensitivity_png";
		t.verticalCenter = 0;
		t.width = 394;
		t.x = 3;
		return t;
	};
	_proto.img_star0_i = function () {
		var t = new eui.Image();
		this.img_star0 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 22;
		t.source = "uiart_json.star2_png";
		t.verticalCenter = 0;
		t.x = 176;
		return t;
	};
	_proto.img_star1_i = function () {
		var t = new eui.Image();
		this.img_star1 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 22;
		t.source = "uiart_json.star2_png";
		t.verticalCenter = 0;
		t.x = 246;
		return t;
	};
	_proto.img_star2_i = function () {
		var t = new eui.Image();
		this.img_star2 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 22;
		t.source = "uiart_json.star2_png";
		t.verticalCenter = 0;
		t.x = 351;
		return t;
	};
	return InkBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["ani_guide","image","grp_guide","rt_unableLine","grp_touch","img_pause","grp_next","pb_ink","lbl_clock","grp_clock"];
		
		this.height = 1136;
		this.width = 640;
		this.ani_guide_i();
		this.elementsContent = [this._Image1_i(),this.grp_guide_i(),this.grp_touch_i(),this.img_pause_i(),this.grp_next_i(),this.pb_ink_i(),this.grp_clock_i(),this._Image7_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [true],[],this._Object1,"loop");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [90],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [481],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [97],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [441.25],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [124.5],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [370.75],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [190],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [319],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [279.75],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [314.5],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [349.5],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [363],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [383.75],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [440.5],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [391],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [478],[],this._Object9,"y");
	}
	var _proto = Main.prototype;

	_proto.ani_guide_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ani_guide = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 400;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_guide_i = function () {
		var t = new eui.Group();
		this.grp_guide = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.image_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 228;
		t.horizontalCenter = -80;
		t.source = "guideline1_png";
		t.touchEnabled = false;
		t.verticalCenter = 100;
		t.width = 331;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 28;
		t.height = 74;
		t.rotation = -30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.guide_png";
		t.touchEnabled = false;
		t.width = 64;
		t.x = 95.75128869403574;
		t.y = 390;
		return t;
	};
	_proto.grp_touch_i = function () {
		var t = new eui.Group();
		this.grp_touch = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.rt_unableLine_i()];
		return t;
	};
	_proto.rt_unableLine_i = function () {
		var t = new eui.Rect();
		this.rt_unableLine = t;
		t.anchorOffsetY = 4;
		t.fillAlpha = 0.7;
		t.fillColor = 0xED1C24;
		t.height = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 20;
		t.x = 770;
		t.y = 479.9999999999999;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 161;
		t.source = "uiart_json.btn_setting_png";
		t.verticalCenter = -410;
		return t;
	};
	_proto.grp_next_i = function () {
		var t = new eui.Group();
		this.grp_next = t;
		t.height = 100;
		t.horizontalCenter = -245;
		t.verticalCenter = 390;
		t.width = 100;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.btn_next_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 34.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.video2_png";
		t.touchEnabled = false;
		t.verticalCenter = 30;
		t.visible = false;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.height = 26;
		t.horizontalCenter = 5;
		t.rotation = -20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.bone_png";
		t.touchEnabled = false;
		t.verticalCenter = 30;
		t.width = 26;
		t.x = 153.33773406654953;
		t.y = 72.23025779301696;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.horizontalCenter = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 1;
		t.text = "-5";
		t.textAlign = "left";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 33;
		t.width = 100;
		t.x = 183.00000000000003;
		t.y = 58.000000000000085;
		return t;
	};
	_proto.pb_ink_i = function () {
		var t = new eui.ProgressBar();
		this.pb_ink = t;
		t.height = 26;
		t.horizontalCenter = 0;
		t.skinName = "skins.InkBar";
		t.value = 80;
		t.verticalCenter = -342;
		t.width = 400;
		return t;
	};
	_proto.grp_clock_i = function () {
		var t = new eui.Group();
		this.grp_clock = t;
		t.height = 110;
		t.horizontalCenter = 265;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -384;
		t.width = 110;
		t.elementsContent = [this._Image6_i(),this.lbl_clock_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "uiart_json.clock_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_clock_i = function () {
		var t = new eui.Label();
		this.lbl_clock = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "5";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 8;
		t.width = 90;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "game0_json.dog_bite_1_1_png";
		t.x = 761;
		t.y = 525;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/love/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["ani_guide","image","grp_guide","rt_unableLine","grp_touch","img_pause","grp_restart","grp_next","pb_ink"];
		
		this.height = 1136;
		this.width = 640;
		this.ani_guide_i();
		this.elementsContent = [this._Image1_i(),this.grp_guide_i(),this.grp_touch_i(),this.img_pause_i(),this.grp_restart_i(),this.grp_next_i(),this.pb_ink_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [true],[],this._Object1,"loop");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [100.641],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [326.793],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [137.951],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [379.163],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [191.871],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [415.664],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [270.581],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [440.532],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [360.331],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [442.637],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [441.97],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [417.161],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [509.245],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [373.129],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [544.236],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [314.196],[],this._Object9,"y");
	}
	var _proto = Main.prototype;

	_proto.ani_guide_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ani_guide = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 200;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 400;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.grp_guide_i = function () {
		var t = new eui.Group();
		this.grp_guide = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Image2_i(),this.image_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 158.178;
		t.horizontalCenter = 0;
		t.source = "guideline2_png";
		t.touchEnabled = false;
		t.verticalCenter = 50;
		t.width = 474.534;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 28;
		t.height = 74;
		t.rotation = -30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.guide_png";
		t.touchEnabled = false;
		t.width = 64;
		t.x = 75.54228869403573;
		t.y = 340.00300000000004;
		return t;
	};
	_proto.grp_touch_i = function () {
		var t = new eui.Group();
		this.grp_touch = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.rt_unableLine_i()];
		return t;
	};
	_proto.rt_unableLine_i = function () {
		var t = new eui.Rect();
		this.rt_unableLine = t;
		t.anchorOffsetY = 4;
		t.fillAlpha = 0.7;
		t.fillColor = 0xED1C24;
		t.height = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 20;
		t.x = 770;
		t.y = 479.9999999999999;
		return t;
	};
	_proto.img_pause_i = function () {
		var t = new eui.Image();
		this.img_pause = t;
		t.horizontalCenter = 161;
		t.source = "uiart_json.btn_setting_png";
		t.verticalCenter = -410;
		return t;
	};
	_proto.grp_restart_i = function () {
		var t = new eui.Group();
		this.grp_restart = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.horizontalCenter = -130;
		t.verticalCenter = 390;
		t.width = 100;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "uiart_json.btn_refresh_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.height = 26;
		t.horizontalCenter = 5;
		t.rotation = -20;
		t.source = "game0_json.bone_png";
		t.touchEnabled = false;
		t.verticalCenter = 30;
		t.width = 26;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.horizontalCenter = 68;
		t.size = 28;
		t.stroke = 1;
		t.text = "-3";
		t.textAlign = "left";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 33;
		t.width = 100;
		return t;
	};
	_proto.grp_next_i = function () {
		var t = new eui.Group();
		this.grp_next = t;
		t.height = 100;
		t.horizontalCenter = -245;
		t.verticalCenter = 390;
		t.width = 100;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.btn_next_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 34.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.video2_png";
		t.touchEnabled = false;
		t.verticalCenter = 30;
		t.visible = false;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 13;
		t.anchorOffsetY = 13;
		t.height = 26;
		t.horizontalCenter = 5;
		t.rotation = -20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.bone_png";
		t.touchEnabled = false;
		t.verticalCenter = 30;
		t.width = 26;
		t.x = 153.33773406654953;
		t.y = 72.23025779301696;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 50;
		t.horizontalCenter = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.stroke = 1;
		t.text = "-5";
		t.textAlign = "left";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 33;
		t.width = 100;
		t.x = 183.00000000000003;
		t.y = 58.000000000000085;
		return t;
	};
	_proto.pb_ink_i = function () {
		var t = new eui.ProgressBar();
		this.pb_ink = t;
		t.height = 26;
		t.horizontalCenter = 0;
		t.skinName = "skins.InkBar";
		t.value = 80;
		t.verticalCenter = -342;
		t.width = 400;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Pause.exml'] = window.skins.Pause = (function (_super) {
	__extends(Pause, _super);
	function Pause() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_star0","img_star2","img_star1","grp_win","grp_lose","grp_pause","grp_home","lbl_next","img_power","lbl_power","grp_next","grp_ad","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Pause.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.grp_win_i(),this.grp_lose_i(),this.grp_pause_i(),this.grp_home_i(),this.grp_next_i(),this.grp_ad_i()];
		return t;
	};
	_proto.grp_win_i = function () {
		var t = new eui.Group();
		this.grp_win = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.img_star0_i(),this.img_star2_i(),this.img_star1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.title_win_png";
		t.verticalCenter = -280;
		t.visible = true;
		t.x = 20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 103;
		t.horizontalCenter = 2;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "You Win";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -290;
		t.width = 384;
		t.x = 130;
		return t;
	};
	_proto.img_star0_i = function () {
		var t = new eui.Image();
		this.img_star0 = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 64;
		t.horizontalCenter = -150;
		t.rotation = 340;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.settle_star1_png";
		t.verticalCenter = -78.5;
		t.x = 107;
		t.y = 156.00000000000006;
		return t;
	};
	_proto.img_star2_i = function () {
		var t = new eui.Image();
		this.img_star2 = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 64;
		t.horizontalCenter = 150;
		t.rotation = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.settle_star1_png";
		t.verticalCenter = -78.5;
		t.x = 407.00000000000006;
		t.y = 156.00000000000006;
		return t;
	};
	_proto.img_star1_i = function () {
		var t = new eui.Image();
		this.img_star1 = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 64;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.settle_star1_png";
		t.verticalCenter = -102;
		t.x = 256.99999999999994;
		t.y = 121;
		return t;
	};
	_proto.grp_lose_i = function () {
		var t = new eui.Group();
		this.grp_lose = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "uiart_json.title_fail_png";
		t.verticalCenter = -280;
		t.x = 20;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 103;
		t.horizontalCenter = 2;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 60;
		t.text = "You Lost";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = -290;
		t.width = 384;
		t.x = 130;
		return t;
	};
	_proto.grp_pause_i = function () {
		var t = new eui.Group();
		this.grp_pause = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 640;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grp_home_i = function () {
		var t = new eui.Group();
		this.grp_home = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 80;
		t.visible = true;
		t.width = 300;
		t.y = 645.0000000000001;
		t.elementsContent = [this._Image3_i(),this._Label3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(74,47,175,17);
		t.source = "uiart_json.btn_green_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.text = "Main Menu";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.grp_next_i = function () {
		var t = new eui.Group();
		this.grp_next = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 240;
		t.visible = true;
		t.width = 300;
		t.y = 645.0000000000001;
		t.elementsContent = [this._Image4_i(),this.lbl_next_i(),this.img_power_i(),this.lbl_power_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(74,47,169,16);
		t.source = "uiart_json.btn_blue_png";
		t.top = 0;
		t.touchEnabled = false;
		t.x = -862.9999999999999;
		t.y = -510;
		return t;
	};
	_proto.lbl_next_i = function () {
		var t = new eui.Label();
		this.lbl_next = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.text = "Next Level";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_power_i = function () {
		var t = new eui.Image();
		this.img_power = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.height = 50;
		t.horizontalCenter = 95;
		t.rotation = -20;
		t.source = "game0_json.bone_png";
		t.touchEnabled = false;
		t.verticalCenter = -60;
		t.width = 50;
		return t;
	};
	_proto.lbl_power_i = function () {
		var t = new eui.Label();
		this.lbl_power = t;
		t.height = 63.745;
		t.horizontalCenter = 154;
		t.size = 50;
		t.stroke = 1;
		t.strokeColor = 0x0F6096;
		t.text = "-3";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = -61;
		t.width = 71.188;
		return t;
	};
	_proto.grp_ad_i = function () {
		var t = new eui.Group();
		this.grp_ad = t;
		t.height = 100;
		t.horizontalCenter = 467;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 120;
		t.visible = true;
		t.width = 250;
		t.x = 986.0000000000002;
		t.y = 547.0000000000001;
		t.elementsContent = [this._Image5_i(),this._Label4_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(52,44,183,22);
		t.top = 0;
		t.touchEnabled = false;
		t.x = 2.2737367544323206e-13;
		t.y = 120.00000000000006;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 60;
		t.right = 0;
		t.size = 40;
		t.text = "复活";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.horizontalCenter = -50;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	return Pause;
})(eui.Skin);