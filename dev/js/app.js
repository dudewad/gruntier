/**
 * Created by pdx-win8user1 on 6/17/2014.
 */

var globalVars = [];
globalVars[0] = 1;;/**
 * Created by pdx-win8user1 on 6/17/2014.
 */

(function(){
    var test1 = 17;
    test1 = 18;
    var a = "seven";
    var b = 1 == 1 ? 1 : 0;
})();;/**
 * Created by pdx-win8user1 on 6/17/2014.
 */

(function(){
    var test = function(x){
        return x + 10;
    };

    globalVars[0] = test(10);
})();