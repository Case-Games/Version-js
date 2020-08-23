function NametoCode(name){
  var code = "";
  if(name[0] == "P"){
    if(name[1] == "a"){
      code = "1";
    }else if (name[1] == "b") {
      code = "2";
    }else{
      return false;
    }
    version = name.split(".",2);
    if(version[0].length = 1){
      code = code + "0" + version[0];
    }else{
      code = code + version[0];
    }
    if(version[1].length = 1){
      code = code + version[1] + "0";
    }else{
      code = code + version[1];
    }
    code = code + "9";
    bugfix = name.split("Bfx",2);
    code = code + bugfix[1];
  }else if (true) {

  }
  return code;
}
