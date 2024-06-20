using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Interface;
using ReactApp1.Server.Model;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GridControlleur : ControllerBase
    {
        [HttpPost(Name = "PostGridData")]
        public void GetGridData([FromBody] int[] json)
        {
            Grid convertion = new Grid(5, 5);
            Cell tempCell;
            IAStarAlgo algo = new AStarAlgo();
            for (int i = 0; i < json.Length; i++)
            {
                var x = i / 5;
                var y = i % 5;
                switch (json[i])
                {
                    case 0:
                        tempCell = new Cell(x,y,false,false,false);
                        convertion.Parkour[x,y]=tempCell;
                        break;
                    case 1:
                        tempCell = new Cell(x, y, false, false, true);
                        convertion.Parkour[x, y] = tempCell;
                        convertion.Start = new System.Numerics.Vector2 (x,y);
                        break;
                    case 2:
                        tempCell = new Cell(x, y, false, true, false);
                        convertion.Parkour[x, y] = tempCell;
                        convertion.End = new System.Numerics.Vector2(x, y);
                        break;
                    case 3:
                        tempCell = new Cell(x, y, true, false, false);
                        convertion.Parkour[x, y] = tempCell;
                        break;
                }
            }
            var res = algo.GetPath(convertion);
        }
    }
}
