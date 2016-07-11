// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(robot) {
    return robot.hear(/(#[0-9,a-f,A-F]{6})/, function(msg) {
      var b, bColor, blue, colorCode, g, gColor, green, r, rColor, red, swiftCode;
      colorCode = msg.match[1];
      r = colorCode.slice(1, 3);
      g = colorCode.slice(3, 5);
      b = colorCode.slice(5, 7);
      red = parseInt(r, 16);
      green = parseInt(g, 16);
      blue = parseInt(b, 16);
      rColor = Math.ceil((red / 255) * 1000) / 1000;
      gColor = Math.ceil((green / 255) * 1000) / 1000;
      bColor = Math.ceil((blue / 255) * 1000) / 1000;
      swiftCode = "UIColor(red:" + rColor + ", green:" + gColor + ", blue:" + bColor + ", alpha: 1.0)";
      return msg.send("Swiftで書くと\n\n" + swiftCode + "\n\nになるのです！");
    });
  };

}).call(this);