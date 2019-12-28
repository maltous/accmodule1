function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xXLp9ISurM":
        Script1();
        break;
      case "5y5S6pxVP5w":
        Script2();
        break;
      case "5YEgomrnruf":
        Script3();
        break;
      case "6YdlmeaSuhp":
        Script4();
        break;
      case "6ldSe0PIyhf":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  window.print();
}

