function NametoCode(name){
  var code = "";
  if(name[0] == "P"){
    if(name[0:1] == "Pa"){
      code = "1";
    }else if (name[0:1] == "Pb") {
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
    code = code + name[-2] + name[-1] ;
  }else if (true) {

  }
}
