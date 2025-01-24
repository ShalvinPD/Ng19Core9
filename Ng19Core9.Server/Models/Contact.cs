using System;
using System.Collections.Generic;

namespace Ng19Core9.Server.Models;

public partial class Contact
{
    public int ContactId { get; set; }

    public int? GroupId { get; set; }

    public string? ContactName { get; set; }

    public string? Email { get; set; }

    public string? Location { get; set; }

    public virtual Group? Group { get; set; }
}
