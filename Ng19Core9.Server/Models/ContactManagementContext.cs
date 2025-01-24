using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Ng19Core9.Server.Models;

public partial class ContactManagementContext : DbContext
{
    public ContactManagementContext()
    {
    }

    public ContactManagementContext(DbContextOptions<ContactManagementContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Group> Groups { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=ContactManagement;Integrated Security=True;Encrypt=false");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contact>(entity =>
        {
            entity.HasIndex(e => e.GroupId, "IX_Contacts_GroupId");

            entity.Property(e => e.ContactName)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Location)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Group).WithMany(p => p.Contacts)
                .HasForeignKey(d => d.GroupId)
                .HasConstraintName("FK_Contacts_Groups");
        });

        modelBuilder.Entity<Group>(entity =>
        {
            entity.Property(e => e.DiscontinueReason)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.GroupDescription)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GroupName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDiscontinued)
                .HasMaxLength(5)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
