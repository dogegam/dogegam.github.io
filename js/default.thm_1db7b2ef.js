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
                generateEUI.skins = {"Scene.Game.Main":"resource/eui_skins/game/Main.exml","Scene.Cover.Main":"resource/eui_skins/cover/Main.exml","Scene.Common":"resource/eui_skins/Common.exml","Scene.Game.TicketBar":"resource/eui_skins/game/TicketBar.exml","Scene.Game.AllTicket":"resource/eui_skins/game/AllTicket.exml","Scene.Game.MyTicket":"resource/eui_skins/game/MyTicket.exml","Scene.Game.Rank":"resource/eui_skins/game/Rank.exml","Scene.Game.Help":"resource/eui_skins/game/Help.exml","Scene.Game.Winner":"resource/eui_skins/game/Winner.exml","Scene.Game.InputAddr":"resource/eui_skins/game/InputAddr.exml"};generateEUI.paths['resource/eui_skins/Common.exml'] = window.skins.Common = (function (_super) {
	__extends(Common, _super);
	function Common() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
	}
	var _proto = Common.prototype;

	return Common;
})(eui.Skin);generateEUI.paths['resource/eui_skins/cover/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Main.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.horizontalCenter = 0;
		t.source = "lau2_jpg";
		t.verticalCenter = 0;
		t.width = 854;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/AllTicket.exml'] = window.skins.AllTicket = (function (_super) {
	__extends(AllTicket, _super);
	function AllTicket() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","lst_0","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = AllTicket.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,106,164,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_0_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 245;
		t.source = "game0_json.img_1_png";
		t.verticalCenter = -390;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.466;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 4;
		t.text = "Today Tickets";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -400.5;
		t.width = 384.183;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 47;
		t.width = 560;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.itemRendererSkinName = skins.TicketBar;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return AllTicket;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Help.exml'] = window.skins.Help = (function (_super) {
	__extends(Help, _super);
	function Help() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Help.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,106,164,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_0_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 245;
		t.source = "game0_json.img_1_png";
		t.verticalCenter = -390;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.466;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 4;
		t.text = "Help";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -400.5;
		t.width = 315.183;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 750;
		t.horizontalCenter = 0;
		t.lineSpacing = 6.5;
		t.size = 35;
		t.stroke = 2;
		t.text = "Click on tab \"Buy ticket\" and enter number of tickets you want to buy. Lots will be drawn everyday using random numbers generated through Random.org. Three winning tickets will be selected and winners will get the following prizes: \n1st place: 80% of the prize pool \n2nd place: 15% of the prize pool \n3rd place: 5% of the prize pool";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 47;
		t.width = 520;
		t.x = 152;
		t.y = 26;
		return t;
	};
	return Help;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/InputAddr.exml'] = window.skins.InputAddr = (function (_super) {
	__extends(InputAddr, _super);
	function InputAddr() {
		_super.call(this);
		this.skinParts = ["rt_bg","et_addr","grp_addr","img_ok","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = InputAddr.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 451;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.grp_addr_i(),this.img_ok_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,106,164,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_0_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Lucida Family";
		t.height = 67.466;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 4;
		t.text = "Dogecoin Address";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -176;
		t.width = 504.183;
		return t;
	};
	_proto.grp_addr_i = function () {
		var t = new eui.Group();
		this.grp_addr = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.verticalCenter = 27;
		t.width = 533;
		t.elementsContent = [this._Rect1_i(),this.et_addr_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.et_addr_i = function () {
		var t = new eui.EditableText();
		this.et_addr = t;
		t.bottom = "20";
		t.left = "20";
		t.lineSpacing = 5;
		t.multiline = true;
		t.right = "20";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.top = "20";
		t.verticalAlign = "top";
		return t;
	};
	_proto.img_ok_i = function () {
		var t = new eui.Image();
		this.img_ok = t;
		t.height = 150.921;
		t.horizontalCenter = 198;
		t.source = "img_check_png";
		t.verticalCenter = 123;
		t.width = 156.878;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 46.87;
		t.horizontalCenter = -15.5;
		t.size = 22;
		t.stroke = 2;
		t.text = "Input your dogecoin wallet address:";
		t.textAlign = "left";
		t.verticalAlign = "bottom";
		t.verticalCenter = -80;
		t.width = 503.429;
		return t;
	};
	return InputAddr;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Main.exml'] = window.skins.Main = (function (_super) {
	__extends(Main, _super);
	function Main() {
		_super.call(this);
		this.skinParts = ["grp_buy","lbl_countdown","lbl_allmoney","lbl_money0","lbl_money1","lbl_money2","lbl_myticket","lbl_myrate","grp_main","grp_allticket","grp_myticket","grp_winrec","grp_help","grp_rank","lbl_ticket","grp_ticket","lbl_money","grp_money"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.grp_main_i(),this.grp_allticket_i(),this.grp_myticket_i(),this.grp_winrec_i(),this.grp_help_i(),this.grp_rank_i(),this.grp_ticket_i(),this.grp_money_i()];
	}
	var _proto = Main.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -200;
		t.fillColor = 0x0C6FD3;
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
		t.elementsContent = [this.grp_buy_i(),this.lbl_countdown_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.lbl_myticket_i(),this.lbl_myrate_i(),this._Image7_i()];
		return t;
	};
	_proto.grp_buy_i = function () {
		var t = new eui.Group();
		this.grp_buy = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 232;
		t.width = 250;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.source = "game0_json.buy_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 300;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 100;
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "BUY\n1 TICKET";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 250;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.horizontalCenter = 28;
		t.source = "game0_json.img_9_png";
		t.touchEnabled = false;
		t.verticalCenter = -53;
		t.width = 50;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.height = 51;
		t.horizontalCenter = 100;
		t.size = 40;
		t.stroke = 1;
		t.text = "-1";
		t.textAlign = "left";
		t.textColor = 0xFF6767;
		t.verticalAlign = "middle";
		t.verticalCenter = -51;
		t.width = 87;
		return t;
	};
	_proto.lbl_countdown_i = function () {
		var t = new eui.Label();
		this.lbl_countdown = t;
		t.bold = true;
		t.height = 77.628;
		t.horizontalCenter = 32;
		t.size = 40;
		t.stroke = 5;
		t.text = "00:00:00";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -256;
		t.width = 267.359;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 48;
		t.height = 181;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -100;
		t.width = 600;
		t.elementsContent = [this.lbl_allmoney_i(),this._Image3_i()];
		return t;
	};
	_proto.lbl_allmoney_i = function () {
		var t = new eui.Label();
		this.lbl_allmoney = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 130;
		t.stroke = 4;
		t.text = "0";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.left = 0;
		t.source = "game0_json.img_6_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 104;
		t.horizontalCenter = -200;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 60;
		t.width = 200;
		t.x = 278;
		t.y = 306;
		t.elementsContent = [this.lbl_money0_i(),this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto.lbl_money0_i = function () {
		var t = new eui.Label();
		this.lbl_money0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.stroke = 4;
		t.text = "0";
		t.textAlign = "center";
		t.top = 40;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.left = 0;
		t.source = "game0_json.img_11_png";
		t.top = 0;
		t.touchEnabled = false;
		t.width = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.left = 40;
		t.right = 0;
		t.size = 25;
		t.stroke = 2;
		t.text = "80%";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 104;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 60;
		t.width = 200;
		t.elementsContent = [this.lbl_money1_i(),this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto.lbl_money1_i = function () {
		var t = new eui.Label();
		this.lbl_money1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.stroke = 4;
		t.text = "0";
		t.textAlign = "center";
		t.top = 40;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.left = 0;
		t.source = "game0_json.img_12_png";
		t.top = 0;
		t.touchEnabled = false;
		t.width = 40;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.left = 40;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.stroke = 2;
		t.text = "15%";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = -159.99999999999994;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 104;
		t.horizontalCenter = 200;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 60;
		t.width = 200;
		t.x = 230;
		t.y = 306;
		t.elementsContent = [this.lbl_money2_i(),this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto.lbl_money2_i = function () {
		var t = new eui.Label();
		this.lbl_money2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.stroke = 4;
		t.text = "0";
		t.textAlign = "center";
		t.top = 40;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.left = 0;
		t.source = "game0_json.img_10_png";
		t.top = 0;
		t.touchEnabled = false;
		t.width = 40;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 40;
		t.left = 40;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.stroke = 2;
		t.text = "5%";
		t.textAlign = "center";
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = -160.00000000000006;
		t.y = 0;
		return t;
	};
	_proto.lbl_myticket_i = function () {
		var t = new eui.Label();
		this.lbl_myticket = t;
		t.height = 75.98;
		t.horizontalCenter = -230;
		t.lineSpacing = 5;
		t.size = 20;
		t.stroke = 2;
		t.text = "Tickets:\n0/0";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = 198;
		t.width = 148.016;
		return t;
	};
	_proto.lbl_myrate_i = function () {
		var t = new eui.Label();
		this.lbl_myrate = t;
		t.height = 75.98;
		t.horizontalCenter = -230;
		t.lineSpacing = 5;
		t.size = 20;
		t.stroke = 2;
		t.text = "Chance:\n0.00%";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = 258;
		t.width = 148.016;
		t.x = 26;
		t.y = 466;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -114;
		t.source = "game0_json.Icon_Timer_png";
		t.verticalCenter = -261.5;
		return t;
	};
	_proto.grp_allticket_i = function () {
		var t = new eui.Group();
		this.grp_allticket = t;
		t.height = 100;
		t.horizontalCenter = 50;
		t.touchChildren = false;
		t.verticalCenter = 385;
		t.width = 100;
		t.elementsContent = [this._Image8_i(),this._Label6_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "game0_json.allticket_png";
		t.touchEnabled = false;
		t.verticalCenter = -11;
		t.width = 80;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.text = "Today\nTickets";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 46.5;
		t.width = 96;
		return t;
	};
	_proto.grp_myticket_i = function () {
		var t = new eui.Group();
		this.grp_myticket = t;
		t.height = 100;
		t.horizontalCenter = 150;
		t.touchChildren = false;
		t.verticalCenter = 385;
		t.width = 100;
		t.x = 30;
		t.y = 913;
		t.elementsContent = [this._Image9_i(),this._Label7_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "game0_json.myticket_png";
		t.touchEnabled = false;
		t.verticalCenter = -11;
		t.width = 80;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.text = "My\nTickets";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 46.5;
		t.width = 96;
		return t;
	};
	_proto.grp_winrec_i = function () {
		var t = new eui.Group();
		this.grp_winrec = t;
		t.height = 100;
		t.horizontalCenter = 250;
		t.touchChildren = false;
		t.verticalCenter = 385;
		t.width = 100;
		t.x = 40;
		t.y = 923;
		t.elementsContent = [this._Image10_i(),this._Label8_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "game0_json.winner_png";
		t.touchEnabled = false;
		t.verticalCenter = -11;
		t.width = 80;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.text = "Past\nWinners";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 46.5;
		t.width = 96;
		return t;
	};
	_proto.grp_help_i = function () {
		var t = new eui.Group();
		this.grp_help = t;
		t.height = 100;
		t.horizontalCenter = 236;
		t.touchChildren = false;
		t.verticalCenter = 248;
		t.visible = true;
		t.width = 100;
		t.x = 50;
		t.y = 933;
		t.elementsContent = [this._Image11_i(),this._Label9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "game0_json.ItemIcon_Chat_png";
		t.touchEnabled = false;
		t.verticalCenter = -11;
		t.width = 90;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.text = "Help";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 46.5;
		t.width = 96;
		return t;
	};
	_proto.grp_rank_i = function () {
		var t = new eui.Group();
		this.grp_rank = t;
		t.height = 100;
		t.horizontalCenter = -250;
		t.scaleY = 1;
		t.touchChildren = false;
		t.verticalCenter = 385;
		t.width = 100;
		t.x = 50;
		t.y = 933;
		t.elementsContent = [this._Image12_i(),this._Label10_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "game0_json.img_5_png";
		t.touchEnabled = false;
		t.verticalCenter = -11;
		t.width = 80;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.horizontalCenter = 0;
		t.size = 16;
		t.stroke = 2;
		t.text = "Ranking";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.verticalCenter = 46.5;
		t.width = 96;
		return t;
	};
	_proto.grp_ticket_i = function () {
		var t = new eui.Group();
		this.grp_ticket = t;
		t.height = 70;
		t.horizontalCenter = -150;
		t.touchChildren = false;
		t.verticalCenter = -389;
		t.width = 222;
		t.elementsContent = [this._Rect2_i(),this._Image13_i(),this._Image14_i(),this.lbl_ticket_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.3;
		t.fillColor = 0x626262;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x000000;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.left = -50;
		t.source = "game0_json.img_9_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.right = 0;
		t.source = "game0_json.img_13_png";
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.lbl_ticket_i = function () {
		var t = new eui.Label();
		this.lbl_ticket = t;
		t.height = 77.628;
		t.horizontalCenter = -21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 228.359;
		return t;
	};
	_proto.grp_money_i = function () {
		var t = new eui.Group();
		this.grp_money = t;
		t.height = 70;
		t.right = 12;
		t.touchChildren = false;
		t.verticalCenter = -389;
		t.width = 275;
		t.y = 154;
		t.elementsContent = [this._Rect3_i(),this._Image15_i(),this.lbl_money_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.3;
		t.fillColor = 0x626262;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0x000000;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.left = -50;
		t.source = "game0_json.img_6_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.lbl_money_i = function () {
		var t = new eui.Label();
		this.lbl_money = t;
		t.height = 77.628;
		t.horizontalCenter = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 228.359;
		t.x = -348.99999999999994;
		t.y = -4;
		return t;
	};
	return Main;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/MyTicket.exml'] = window.skins.MyTicket = (function (_super) {
	__extends(MyTicket, _super);
	function MyTicket() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","lst_0","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = MyTicket.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,106,164,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_0_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 245;
		t.source = "game0_json.img_1_png";
		t.verticalCenter = -390;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.466;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 4;
		t.text = "My Tickets";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -400.5;
		t.width = 315.183;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 47;
		t.width = 560;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.itemRendererSkinName = skins.TicketBar;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return MyTicket;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Rank.exml'] = window.skins.Rank = (function (_super) {
	__extends(Rank, _super);
	function Rank() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","lst_0","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Rank.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,106,164,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_0_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 245;
		t.source = "game0_json.img_1_png";
		t.verticalCenter = -390;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.466;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 4;
		t.text = "Ranking";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -400.5;
		t.width = 315.183;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 47;
		t.width = 560;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.itemRendererSkinName = skins.TicketBar;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return Rank;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/TicketBar.exml'] = window.skins.TicketBar = (function (_super) {
	__extends(TicketBar, _super);
	function TicketBar() {
		_super.call(this);
		this.skinParts = ["img_icon","lbl_idx","lbl_name","lbl_data","img_0","img_idx","grp_main"];
		
		this.height = 80;
		this.width = 550;
		this.elementsContent = [this._Image1_i(),this.grp_main_i()];
	}
	var _proto = TicketBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(26,26,79,77);
		t.source = "game0_json.img_2_png";
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_icon_i(),this._Image2_i(),this.lbl_idx_i(),this.lbl_name_i(),this.lbl_data_i(),this.img_0_i(),this.img_idx_i()];
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 27.5;
		t.height = 55;
		t.left = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 55;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.left = 83;
		t.source = "game0_json.iconoutside_png";
		t.verticalCenter = 0;
		t.width = 57;
		return t;
	};
	_proto.lbl_idx_i = function () {
		var t = new eui.Label();
		this.lbl_idx = t;
		t.height = 40.886;
		t.left = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 67.93;
		t.x = 9.000000000000004;
		t.y = 20;
		return t;
	};
	_proto.lbl_name_i = function () {
		var t = new eui.Label();
		this.lbl_name = t;
		t.height = 40.886;
		t.left = 147;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "玩家的昵称名字等等";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 205.93;
		t.x = 147.00000000000003;
		t.y = 20;
		return t;
	};
	_proto.lbl_data_i = function () {
		var t = new eui.Label();
		this.lbl_data = t;
		t.height = 53.886;
		t.right = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "2024/4/25\n16:21:21";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 121.93;
		t.x = 412.07;
		t.y = 13;
		return t;
	};
	_proto.img_0_i = function () {
		var t = new eui.Image();
		this.img_0 = t;
		t.height = 50;
		t.right = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_9_png";
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 366;
		t.y = 15;
		return t;
	};
	_proto.img_idx_i = function () {
		var t = new eui.Image();
		this.img_idx = t;
		t.height = 80;
		t.horizontalCenter = -231;
		t.source = "game0_json.img_15_png";
		t.verticalCenter = 5;
		t.width = 80;
		return t;
	};
	return TicketBar;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Winner.exml'] = window.skins.Winner = (function (_super) {
	__extends(Winner, _super);
	function Winner() {
		_super.call(this);
		this.skinParts = ["rt_bg","img_close","lst_0","grp_main"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.rt_bg_i(),this.grp_main_i()];
	}
	var _proto = Winner.prototype;

	_proto.rt_bg_i = function () {
		var t = new eui.Rect();
		this.rt_bg = t;
		t.alpha = 0.5;
		t.bottom = -200;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = -200;
		return t;
	};
	_proto.grp_main_i = function () {
		var t = new eui.Group();
		this.grp_main = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this.img_close_i(),this._Label1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = -20;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,106,164,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_0_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.horizontalCenter = 245;
		t.source = "game0_json.img_1_png";
		t.verticalCenter = -390;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 67.466;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 4;
		t.text = "Past Winners";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -400.5;
		t.width = 315.183;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 47;
		t.width = 560;
		t.viewport = this.lst_0_i();
		return t;
	};
	_proto.lst_0_i = function () {
		var t = new eui.List();
		this.lst_0 = t;
		t.itemRendererSkinName = skins.WinnerBar;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return Winner;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/WinnerBar.exml'] = window.skins.WinnerBar = (function (_super) {
	__extends(WinnerBar, _super);
	function WinnerBar() {
		_super.call(this);
		this.skinParts = ["lbl_info","img_icon0","lbl_idx0","lbl_name0","lbl_money0","img_icon1","lbl_idx1","lbl_name1","lbl_money1","img_icon2","lbl_idx2","lbl_name2","lbl_money2"];
		
		this.height = 230;
		this.width = 550;
		this.elementsContent = [this._Image1_i(),this.lbl_info_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = WinnerBar.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(25,27,80,76);
		t.source = "game0_json.img_2_png";
		t.top = 0;
		return t;
	};
	_proto.lbl_info_i = function () {
		var t = new eui.Label();
		this.lbl_info = t;
		t.height = 34;
		t.size = 20;
		t.text = "2024/4/25       Amount:99999";
		t.width = 502;
		t.x = 21;
		t.y = 14;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 40;
		t.width = 550;
		t.elementsContent = [this.img_icon0_i(),this._Image2_i(),this.lbl_idx0_i(),this.lbl_name0_i(),this.lbl_money0_i(),this._Image3_i()];
		return t;
	};
	_proto.img_icon0_i = function () {
		var t = new eui.Image();
		this.img_icon0 = t;
		t.height = 55;
		t.left = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 55;
		t.x = 84;
		t.y = 13;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.left = 83;
		t.source = "game0_json.iconoutside_png";
		t.verticalCenter = 0;
		t.width = 57;
		return t;
	};
	_proto.lbl_idx0_i = function () {
		var t = new eui.Label();
		this.lbl_idx0 = t;
		t.height = 40.886;
		t.left = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 67.93;
		t.x = 9.000000000000004;
		t.y = 20;
		return t;
	};
	_proto.lbl_name0_i = function () {
		var t = new eui.Label();
		this.lbl_name0 = t;
		t.height = 40.886;
		t.left = 147;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "玩家的昵称名字等等";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 205.93;
		t.x = 147.00000000000003;
		t.y = 20;
		return t;
	};
	_proto.lbl_money0_i = function () {
		var t = new eui.Label();
		this.lbl_money0 = t;
		t.height = 53.886;
		t.right = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "9999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 121.93;
		t.x = 412.07;
		t.y = 13;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.right = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_11_png";
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 366;
		t.y = 15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 100;
		t.width = 550;
		t.elementsContent = [this.img_icon1_i(),this._Image4_i(),this.lbl_idx1_i(),this.lbl_name1_i(),this.lbl_money1_i(),this._Image5_i()];
		return t;
	};
	_proto.img_icon1_i = function () {
		var t = new eui.Image();
		this.img_icon1 = t;
		t.height = 55;
		t.left = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 55;
		t.x = 84;
		t.y = 13;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.left = 83;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.iconoutside_png";
		t.verticalCenter = 0;
		t.width = 57;
		t.x = 84;
		t.y = -12;
		return t;
	};
	_proto.lbl_idx1_i = function () {
		var t = new eui.Label();
		this.lbl_idx1 = t;
		t.height = 40.886;
		t.left = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 67.93;
		t.x = 9.000000000000004;
		t.y = 20;
		return t;
	};
	_proto.lbl_name1_i = function () {
		var t = new eui.Label();
		this.lbl_name1 = t;
		t.height = 40.886;
		t.left = 147;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "玩家的昵称名字等等";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 205.93;
		t.x = 147.00000000000003;
		t.y = 20;
		return t;
	};
	_proto.lbl_money1_i = function () {
		var t = new eui.Label();
		this.lbl_money1 = t;
		t.height = 53.886;
		t.right = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "888";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 121.93;
		t.x = 412.07;
		t.y = 13;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.right = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_12_png";
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 366;
		t.y = 15;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.horizontalCenter = 0;
		t.top = 160;
		t.width = 550;
		t.x = 10;
		t.elementsContent = [this.img_icon2_i(),this._Image6_i(),this.lbl_idx2_i(),this.lbl_name2_i(),this.lbl_money2_i(),this._Image7_i()];
		return t;
	};
	_proto.img_icon2_i = function () {
		var t = new eui.Image();
		this.img_icon2 = t;
		t.height = 55;
		t.left = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 55;
		t.x = 84;
		t.y = 13;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.left = 83;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.iconoutside_png";
		t.verticalCenter = 0;
		t.width = 57;
		t.x = 84;
		t.y = -57;
		return t;
	};
	_proto.lbl_idx2_i = function () {
		var t = new eui.Label();
		this.lbl_idx2 = t;
		t.height = 40.886;
		t.left = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "999";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 67.93;
		t.x = 9.000000000000004;
		t.y = 20;
		return t;
	};
	_proto.lbl_name2_i = function () {
		var t = new eui.Label();
		this.lbl_name2 = t;
		t.height = 40.886;
		t.left = 147;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "玩家的昵称名字等等";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 205.93;
		t.x = 147.00000000000003;
		t.y = 20;
		return t;
	};
	_proto.lbl_money2_i = function () {
		var t = new eui.Label();
		this.lbl_money2 = t;
		t.height = 53.886;
		t.right = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "77";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 121.93;
		t.x = 412.07;
		t.y = 13;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.right = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "game0_json.img_10_png";
		t.verticalCenter = 0;
		t.width = 50;
		t.x = 366;
		t.y = 15;
		return t;
	};
	return WinnerBar;
})(eui.Skin);