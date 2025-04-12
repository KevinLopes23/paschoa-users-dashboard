using Microsoft.EntityFrameworkCore;
using PaschoaApi.Models;

namespace PaschoaApi.Data{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<User> Users {get; set;}
     }
}