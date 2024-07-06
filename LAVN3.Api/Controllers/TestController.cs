using Microsoft.AspNetCore.Mvc;

namespace LAVN3.Api.Controllers;

public class TestController : ControllerBase
{
    public IActionResult Index()
    {
        return Ok("Test result");
    }

    [HttpGet("/api/test")]
    public IActionResult ApiCreate()
    {
        return Ok("ApiCreate");
    }
}