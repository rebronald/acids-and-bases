function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RXc79PkGDW":
        Script1();
        break;
      case "5lTgEWhJdxS":
        Script2();
        break;
      case "6oXAzXV9G7L":
        Script3();
        break;
      case "5hAuVHWMzu7":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var slides = player.GetVar("slides");
var total = player.GetVar("total");
var myScore = (slides/total)*100;

function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
lmsAPI.SetScore(myScore, 100, 0);

}

function Script2()
{
  var player = GetPlayer();
var slides = player.GetVar("slides");
var total = player.GetVar("total");
var myScore = (slides/total)*100;

function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
lmsAPI.SetScore(myScore, 100, 0);

}

function Script3()
{
  var player = GetPlayer();
var slides = player.GetVar("slides");
var total = player.GetVar("total");
var myScore = (slides/total)*100;

function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
lmsAPI.SetScore(myScore, 100, 0);

}

function Script4()
{
  var player = GetPlayer();
var slides = player.GetVar("slides");
var total = player.GetVar("total");
var myScore = (slides/total)*100;

function findLMSAPI(win) {
 if (win.hasOwnProperty("GetStudentID")) return win;
 else if (win.parent == win) return null;
 else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
lmsAPI.SetScore(myScore, 100, 0);

}

