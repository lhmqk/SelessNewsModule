// using System;
// using System.Collections.Generic;
// using System.IO;
// using System.Linq;
// using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace api_xelex_news.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly ILogger<NewsController> _logger;

        public NewsController(ILogger<NewsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetNews")]
        public IActionResult GetNews()
        {
            var newsJson = System.IO.File.ReadAllText("news.json");
            var news = JsonConvert.DeserializeObject<List<New>>(newsJson);
            return Ok(news);
        }
    }

    public class New
    {
        public string Title { get; set; }
        public string Img { get; set; }
        public string Date { get; set; }
        public string Desc { get; set; }
        public string Categorie { get; set; }
        public int View { get; set; }
        public int Share { get; set; }
    }
}
