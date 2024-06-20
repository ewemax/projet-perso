using ReactApp1.Server.Interface;
using System.Collections.Generic;
using System.Numerics;

namespace ReactApp1.Server.Model
{
    public class AStarAlgo : IAStarAlgo
    {
        private Grid grid;
        private Cell endCell;
        
        //private Grid CreateInitialgrid()
        //{
        //    List<Cell> row1 = new List<Cell>()
        //            { new Cell(0,0,false,false,true),
        //              new Cell(0,1,false,false,false),
        //              new Cell(0,2,false,false,false),
        //              new Cell(0,3,false,false,false),
        //              new Cell(0,4,false,false,false),
        //            };
        //    List<Cell> row2 = new List<Cell>()
        //            { new Cell(1,0,true,false,false),
        //              new Cell(1,1,true,false,false),
        //              new Cell(1,2,true,false,false),
        //              new Cell(1,3,true,false,false),
        //              new Cell(1,4,false,false,false),
        //            };
        //    List<Cell> row3 = new List<Cell>()
        //            { new Cell(2,0,false,false,false),
        //              new Cell(2,1,false,false,false),
        //              new Cell(2,2,false,false,false),
        //              new Cell(2,3,false,false,false),
        //              new Cell(2,4,false,false,false),
        //            };
        //    List<Cell> row4 = new List<Cell>()
        //            { new Cell(3,0,false,false,false),
        //              new Cell(3,1,true,false,false),
        //              new Cell(3,2,true,false,false),
        //              new Cell(3,3,true,false,false),
        //              new Cell(3,4,true,false,false),
        //            };
        //    List<Cell> row5 = new List<Cell>()
        //            { new Cell(4,0,false,false,false),
        //              new Cell(4,1,false,false,false),
        //              new Cell(4,2,false,false,false),
        //              new Cell(4,3,false,false,false),
        //              new Cell(4,4,false,true,false),
        //            };
        //    List<List<Cell>> initialgrid = new List<List<Cell>>();
        //    initialgrid.Add(row1);
        //    initialgrid.Add(row2);
        //    initialgrid.Add(row3);
        //    initialgrid.Add(row4);
        //    initialgrid.Add(row5);
        //    _end = new Vector2(4, 4);
        //    return new Grid(initialgrid, new System.Numerics.Vector2(0, 0), new System.Numerics.Vector2(4, 4), 5, 5);
        //}

        private List<Cell> GetAdjacentCell(Cell currentCell)
        {
            List<Cell> results = new List<Cell>();
            List<Location> AdjLoc = currentCell.getAdjacentCellLocation();
            foreach (Location loc in AdjLoc)
            {
                int x = (int)loc.x;
                int y = (int)loc.y;
                if (x < 0 || x > grid.height - 1 || y < 0 || y > grid.length - 1)
                    continue;
                Cell cell = grid.Parkour[x,y];
                if (cell.Iswall)
                    continue;
                if (cell.IsVisited)
                    continue;
                cell.Parent = currentCell;
                cell.CalculateVariousCost(grid.End);
                results.Add(cell);

            }
            return results;
        }

        private bool Search (Cell currentCell)
        {
            currentCell.IsVisited = true;
            List<Cell>nextCells = GetAdjacentCell(currentCell);
            nextCells.Sort((cell1,cell2)=>cell1.TotalCost.CompareTo(cell2.TotalCost));
            foreach (Cell cell in nextCells)
            {
                if (cell.Pos == grid.End)
                {
                    endCell= cell;
                    return true;
                }
                else
                    if (Search(cell))
                    return true;
            }
            return false;
        }

        public List<Cell> GetPath(Grid grid)
        {
            this.grid = grid;
            List<Cell> path = new List<Cell>();
            Cell firstcell = grid.Parkour[(int)grid.Start.X, (int)grid.Start.Y];
            firstcell.CalculateVariousCost(grid.End);
            if (Search(firstcell))
            {
                Cell cell = endCell;
                while (cell.Parent != null)
                {
                    path.Add(cell);
                    cell = cell.Parent;
                }
                return path;
            }
            else return new List<Cell>();
        }
    }
}
