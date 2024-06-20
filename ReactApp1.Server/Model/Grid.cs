using System.Numerics;

namespace ReactApp1.Server.Model
{
    public class Grid
    {
        public Cell[,] Parkour { get; set; }

        public int height, length;

        public Vector2 Start {  get; set; }    
        public Vector2 End {  get; set; }

        public Grid(Cell[,] Parkour, Vector2 Start, Vector2 End, int height, int lenght) 
        {  
            this.Parkour = Parkour;
            this.Start = Start;
            this.End = End;
            this.height = height;
            this.length = lenght;
        }
        public Grid( int height, int lenght)
        {
            this.Parkour = new Cell[height, lenght];
            this.height = height;
            this.length = lenght;

        }
    }
}
