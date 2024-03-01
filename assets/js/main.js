/**
 * Template Name: NiceAdmin
 * Updated: Jan 29 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Sidebar toggle
   */
  if (select(".toggle-sidebar-btn")) {
    on("click", ".toggle-sidebar-btn", function (e) {
      select("body").classList.toggle("toggle-sidebar");
    });
  }

  /**
   * Search bar toggle
   */
  if (select(".search-bar-toggle")) {
    on("click", ".search-bar-toggle", function (e) {
      select(".search-bar").classList.toggle("search-bar-show");
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /**
   * Initiate quill editors
   */
  if (select(".quill-editor-default")) {
    new Quill(".quill-editor-default", {
      theme: "snow",
    });
  }

  if (select(".quill-editor-bubble")) {
    new Quill(".quill-editor-bubble", {
      theme: "bubble",
    });
  }

  if (select(".quill-editor-full")) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [
            {
              font: [],
            },
            {
              size: [],
            },
          ],
          ["bold", "italic", "underline", "strike"],
          [
            {
              color: [],
            },
            {
              background: [],
            },
          ],
          [
            {
              script: "super",
            },
            {
              script: "sub",
            },
          ],
          [
            {
              list: "ordered",
            },
            {
              list: "bullet",
            },
            {
              indent: "-1",
            },
            {
              indent: "+1",
            },
          ],
          [
            "direction",
            {
              align: [],
            },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
      theme: "snow",
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isSmallScreen = window.matchMedia("(max-width: 1023.5px)").matches;

  tinymce.init({
    selector: "textarea.tinymce-editor",
    plugins:
      "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
    editimage_cors_hosts: ["picsum.photos"],
    menubar: "file edit view insert format tools table help",
    toolbar:
      "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
    autosave_ask_before_unload: true,
    autosave_interval: "30s",
    autosave_prefix: "{path}{query}-{id}-",
    autosave_restore_when_empty: false,
    autosave_retention: "2m",
    image_advtab: true,
    link_list: [
      {
        title: "My page 1",
        value: "https://www.tiny.cloud",
      },
      {
        title: "My page 2",
        value: "http://www.moxiecode.com",
      },
    ],
    image_list: [
      {
        title: "My page 1",
        value: "https://www.tiny.cloud",
      },
      {
        title: "My page 2",
        value: "http://www.moxiecode.com",
      },
    ],
    image_class_list: [
      {
        title: "None",
        value: "",
      },
      {
        title: "Some class",
        value: "class-name",
      },
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === "file") {
        callback("https://www.google.com/logos/google.jpg", {
          text: "My text",
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === "image") {
        callback("https://www.google.com/logos/google.jpg", {
          alt: "My alt text",
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === "media") {
        callback("movie.mp4", {
          source2: "alt.ogg",
          poster: "https://www.google.com/logos/google.jpg",
        });
      }
    },
    templates: [
      {
        title: "New Table",
        description: "creates a new table",
        content:
          '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
      },
      {
        title: "Starting my story",
        description: "A cure for writers block",
        content: "Once upon a time...",
      },
      {
        title: "New list with dates",
        description: "New List with dates",
        content:
          '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
      },
    ],
    template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
    template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar:
      "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
    noneditable_class: "mceNonEditable",
    toolbar_mode: "sliding",
    contextmenu: "link image table",
    skin: useDarkMode ? "oxide-dark" : "oxide",
    content_css: useDarkMode ? "dark" : "default",
    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(needsValidation).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  /**
   * Initiate Datatables
   */
  const datatables = select(".datatable", true);
  datatables.forEach((datatable) => {
    new simpleDatatables.DataTable(datatable, {
      perPageSelect: [5, 10, 15, ["All", -1]],
      columns: [
        {
          select: 2,
          sortSequence: ["desc", "asc"],
        },
        {
          select: 3,
          sortSequence: ["desc"],
        },
        {
          select: 4,
          cellClass: "green",
          headerClass: "red",
        },
      ],
    });
  });

  /**
   * Autoresize echart charts
   */
  const mainContainer = select("#main");
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function () {
        select(".echart", true).forEach((getEchart) => {
          echarts.getInstanceByDom(getEchart).resize();
        });
      }).observe(mainContainer);
    }, 200);
  }
})();

// Js for table
const data = {
  columns: [
    {
      label: "Name",
      field: "name",
    },
    "Position",
    "Office",
    "Age",
    "Start date",
    "Salary",
  ],
  rows: [
    [
      "Tiger Nixon",
      "System Architect",
      "Edinburgh",
      "61",
      "2011/04/25",
      "$320,800",
    ],
    ["Garrett Winters", "Accountant", "Tokyo", "63", "2011/07/25", "$170,750"],
    [
      "Ashton Cox",
      "Junior Technical Author",
      "San Francisco",
      "66",
      "2009/01/12",
      "$86,000",
    ],
    [
      "Cedric Kelly",
      "Senior Javascript Developer",
      "Edinburgh",
      "22",
      "2012/03/29",
      "$433,060",
    ],
    ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"],
    [
      "Brielle Williamson",
      "Integration Specialist",
      "New York",
      "61",
      "2012/12/02",
      "$372,000",
    ],
    [
      "Herrod Chandler",
      "Sales Assistant",
      "San Francisco",
      "59",
      "2012/08/06",
      "$137,500",
    ],
    [
      "Rhona Davidson",
      "Integration Specialist",
      "Tokyo",
      "55",
      "2010/10/14",
      "$327,900",
    ],
    [
      "Colleen Hurst",
      "Javascript Developer",
      "San Francisco",
      "39",
      "2009/09/15",
      "$205,500",
    ],
    [
      "Sonya Frost",
      "Software Engineer",
      "Edinburgh",
      "23",
      "2008/12/13",
      "$103,600",
    ],
    ["Jena Gaines", "Office Manager", "London", "30", "2008/12/19", "$90,560"],
    [
      "Quinn Flynn",
      "Support Lead",
      "Edinburgh",
      "22",
      "2013/03/03",
      "$342,000",
    ],
    [
      "Charde Marshall",
      "Regional Director",
      "San Francisco",
      "36",
      "2008/10/16",
      "$470,600",
    ],
    [
      "Haley Kennedy",
      "Senior Marketing Designer",
      "London",
      "43",
      "2012/12/18",
      "$313,500",
    ],
  ],
};

const instance = new mdb.Datatable(document.getElementById("datatable"), data);
const advancedSearchInput = document.getElementById("advanced-search-input");

const search = (value) => {
  let [phrase, columns] = value.split(" in:").map((str) => str.trim());

  if (columns) {
    columns = columns.split(",").map((str) => str.toLowerCase().trim());
  }

  instance.search(phrase, columns);
};

document
  .getElementById("advanced-search-button")
  .addEventListener("click", (e) => {
    search(advancedSearchInput.value);
  });

advancedSearchInput.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    search(e.target.value);
  }
});

var $table = $("#table");
var $remove = $("#remove");
var selections = [];

function getIdSelections() {
  return $.map($table.bootstrapTable("getSelections"), function (row) {
    return row.id;
  });
}

function responseHandler(res) {
  $.each(res.rows, function (i, row) {
    row.state = $.inArray(row.id, selections) !== -1;
  });
  return res;
}

function detailFormatter(index, row) {
  var html = [];
  $.each(row, function (key, value) {
    html.push("<p><b>" + key + ":</b> " + value + "</p>");
  });
  return html.join("");
}

function operateFormatter(value, row, index) {
  return [
    '<button class="btn btn-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></button>',
    '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div>',
  ].join("");
}

window.operateEvents = {
  "click .like": function (e, value, row, index) {
    alert("You click like action, row: " + JSON.stringify(row));
  },
  "click .remove": function (e, value, row, index) {
    $table.bootstrapTable("remove", {
      field: "id",
      values: [row.id],
    });
  },
};

// function totalTextFormatter(data) {
//   return 'Total'
// }

// function totalNameFormatter(data) {
//   return data.length
// }

// function totalPriceFormatter(data) {
//   var field = this.field
//   return '$' + data.map(function (row) {
//     return +row[field].substring(1)
//   }).reduce(function (sum, i) {
//     return sum + i
//   }, 0)
// }

var $table = $("#table");

$(function () {
  var data = [
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Andrei ",
      lname: "Masharin",
      type: "Owner, Tenant",
      phone: "777-444-6556",
      unit: "432",
      community: "Los Alisos",
      address: "2400 Harbor Boulevard ",
      city: "Costa Mesa",
      state: "CA",
      zip: "94454",
    },
    {
      fname: "Anje",
      lname: "Keizer",
      type: "N/A",
      phone: "713-810-8418",
      unit: "343",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Arina",
      lname: "Belomestnykh",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "454",
      community: "Fort Kent",
      address: "1918  Crim Lane",
      city: "New Madison",
      state: "OH",
      zip: "45346",
    },
    {
      fname: "Darius",
      lname: "Cummings",
      type: "N/A",
      phone: "937-755-9651",
      unit: "123",
      community: "Dennehotso",
      address: "3848  Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
    {
      fname: "Francisco",
      lname: "Maia",
      type: "Owner, Tenant",
      phone: "937-755-9651",
      unit: "565",
      community: "Cameron",
      address: "3848 Michael Street",
      city: "Hendley",
      state: "NE",
      zip: "45346",
    },
    {
      fname: "Chinelo",
      lname: "Chyke",
      type: "N/A",
      phone: "937-755-9651",
      unit: "545",
      community: "Dennehotso",
      address: "3848 Michael Street",
      city: "Costa Mesa",
      state: "NE",
      zip: "68946",
    },
  ];

  $table.bootstrapTable({ data: data });
  $table.bootstrapTable("updateFormatText", "formatShowingRows", "Showing");
});

// Events
$(".dropdown-container")
  .on("click", ".dropdown-button", function () {
    $(this).siblings(".dropdown-list").toggle();
  })
  .on("input", ".dropdown-search", function () {
    var target = $(this);
    var dropdownList = target.closest(".dropdown-list");
    var search = target.val().toLowerCase();

    if (!search) {
      dropdownList.find("li").show();
      return false;
    }

    dropdownList.find("li").each(function () {
      var text = $(this).text().toLowerCase();
      var match = text.indexOf(search) > -1;
      $(this).toggle(match);
    });
  })
  .on("change", '[type="checkbox"]', function () {
    var container = $(this).closest(".dropdown-container");
    var numChecked = container.find('[type="checkbox"]:checked').length;
    container.find(".quantity").text(numChecked || "Any");
  });

$(document).ready(function () {
  var seachHtml = "";

  var checkBoxIdNoPart = 0;
  $("table.table-bordered thead tr th div.th-inner").each(function () {
    checkBoxIdNoPart++;
    seachHtml +=
      '<input class="checkBoxClass"  value=' +
      checkBoxIdNoPart +
      ' type="checkbox">' +
      '<label for="<%= abbreviation %>">' +
      $(this).html() +
      "</label><br>";
  });

  $(".dropdown-list").append(seachHtml);

  $("#search_input").keyup(function () {
    var searchText = $(this).val().toLowerCase();
    // Show only matching TR, hide rest of them
    $.each(checkBoxValArray, function (index, value) {
      $.each($("#table tbody td:nth-child(" + value + ")"), function () {
        if ($(this).text().toLowerCase().indexOf(searchText) != -1)
          $(this).parent().show();
        else $(this).parent().hide();
      });
    });
  });

  var checkBoxValArray = [];
  $(".checkBoxClass").click(function () {
    checkBoxValArray.push($(this).val());
  });
});

// https://examples.bootstrap-table.com/index.html#methods/get-visible-hidden-columns.html#view-source
