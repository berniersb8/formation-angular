namespace Beer.API.DTO
{
    public class BeerDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
    }

    public static class BeerType
    {
        public const string WHITE = "WHITE";
        public const string BLOND = "BLOND";
        public const string API = "API";
        public const string RED = "RED";
        public const string BROWN = "BROWN";
        public const string BLACK = "BLACK";
    }
}
