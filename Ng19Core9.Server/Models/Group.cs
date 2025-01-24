using System;
using System.Collections.Generic;

namespace Ng19Core9.Server.Models;

public partial class Group
{
    public int GroupId { get; set; }

    public string? GroupName { get; set; }

    public string? GroupDescription { get; set; }

    public string? IsDiscontinued { get; set; }

    public DateOnly? DiscontinuedDate { get; set; }

    public string? DiscontinueReason { get; set; }

    public virtual ICollection<Contact> Contacts { get; set; } = new List<Contact>();
}
