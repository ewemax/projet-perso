using System.Numerics;

namespace ReactApp1.Server.Model
{
    public class Cell
    {
        public float LenghTofEnd { get; set; }
        public float LenghtFromParent { get; set; }
        public float TotalCost { get; set; }
        public int Score { get; set; }

        public bool Iswall { get; set; }
        public bool IsEnd { get; set; }
        public bool IsBegining { get; set; }
        public bool IsVisited { get; set; }
        public bool IsOpen { get; set; }


        public Cell Parent = null;
        public Vector2 Pos;



        public Cell (int x, int y, bool iswall, bool isEnd, bool isBegining)
        {
            Iswall = iswall;
            IsEnd = isEnd;
            IsBegining = isBegining;
            this.IsVisited = false;
            IsOpen = false;
            TotalCost = 0;
            Pos = new Vector2 (x,y);
        }

        public void CalculateVariousCost(Vector2 end)
        {
            LenghTofEnd = Vector2.Distance(Pos, end);
            if (Parent is not null)
                LenghtFromParent = Parent.LenghtFromParent + 1;
            else LenghtFromParent = 0;
            TotalCost= LenghTofEnd+LenghtFromParent;
        }

        public List<Location> getAdjacentCellLocation()
        {
            List<Location> results = new List<Location>();
            results.Add(new Location { x = Pos.X+1, y = Pos.Y});
            results.Add(new Location { x = Pos.X-1, y = Pos.Y });
            results.Add(new Location { x = Pos.X, y = Pos.Y + 1 });
            results.Add(new Location { x = Pos.X, y = Pos.Y - 1 });
            return results;
        }
    }
}
