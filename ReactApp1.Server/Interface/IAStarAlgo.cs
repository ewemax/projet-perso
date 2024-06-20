using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Model;

namespace ReactApp1.Server.Interface
{
    public interface IAStarAlgo
    {
        List<Cell> GetPath(Grid grid);
    }
}
