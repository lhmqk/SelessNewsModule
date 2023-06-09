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
    public class StudentsController : ControllerBase
    {
        private readonly ILogger<StudentsController> _logger;

        public StudentsController(ILogger<StudentsController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetStudents")]
        public IActionResult GetStudents()
        {
            var studentsJson = System.IO.File.ReadAllText("students.json");
            var students = JsonConvert.DeserializeObject<List<Student>>(studentsJson);
            return Ok(students);
        }
    }

    public class Student
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Grade { get; set; }
    }
}