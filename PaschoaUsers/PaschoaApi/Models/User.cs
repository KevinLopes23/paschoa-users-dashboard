namespace PaschoaApi.Models{
    public class User
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Genero { get; set; }
        public string Cidade { get; set; }
        public string FotoUrl { get; set; }
    }
}