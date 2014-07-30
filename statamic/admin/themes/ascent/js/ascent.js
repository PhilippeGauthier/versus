$(function() {


  /////////////////////////////////////////
  //
  // Hide iPhone address bar
  //
  /////////////////////////////////////////

  window.addEventListener("load",function() {
    setTimeout(function(){
      window.scrollTo(0, 1);
    }, 0);
  });



  /////////////////////////////////////////
  //
  // Custom select box styling
  //
  /////////////////////////////////////////

  $('.input-select-wrap select').not('.cell-select select').each(function() {
    title = $('option:selected', this).text();

    $(this)
      .css({'z-index':10,'opacity':0,'appearance':'none', '-khtml-appearance':'none', '-webkit-appearance': 'none'})
      .after('<span class="select value-' + title + '">' + title + '</span>')
      .change(function() {
        var val = $('option:selected', this).text();
        $(this).next().removeClass(function(index, css) {
          return (css.match(/\bvalue-\S+/g) || []).join(' ');
        })
        .addClass('value-' + val)
        .text(val);
      });
  });

  if ($("#date-submit").length) {
    $("#date-submit").find('input[type=submit]').remove();
    $("#date-submit").on("change", "select", function() {
      $(this).closest("form").submit();
    });
  }



  /////////////////////////////////////////
  //
  // Tablesorter
  //
  /////////////////////////////////////////
	

  // Tablesorter
  $.tablesorter.addParser({
    id: "hidden-date",
    is: function(s) {
      return false;
    },
    format: function(s, table, cell) {
      return parseInt($(cell).data("fulldate"), 10);
    },
    type: 'numeric'
  });

  $('.log-sortable').tablesorter({
    headers: {
      1: {
        sorter: "hidden-date"
      }
    }
  });
	
  $('.entries-sortable').tablesorter({ 
    headers: {
	2: {
	  sorter: "hidden-date"
	}
    }
  });

  $('.sortable').tablesorter();



  /////////////////////////////////////////
  //
  // Tooltips
  //
  /////////////////////////////////////////

  $('.tip').tooltip();



  /////////////////////////////////////////
  //
  // Mark It Up
  //
  /////////////////////////////////////////
	
  var languageMarkup;

  switch (content_type.toLowerCase()) {
    case 'md':
    case 'markdown':
      languageMarkup = [
        {name:'Heading 1', openWith:'# ', placeHolder:'Your title here...' },
        {name:'Heading 2', openWith:'## ', placeHolder:'Your title here...' },
        {name:'Heading 3', openWith:'### ', placeHolder:'Your title here...' },
        {name:'Heading 4', openWith:'#### ', placeHolder:'Your title here...' },
        {name:'Heading 5', openWith:'##### ', placeHolder:'Your title here...' },
        {name:'Heading 6', openWith:'###### ', placeHolder:'Your title here...' },
        {name:'Bold', key:'B', openWith:'**', closeWith:'**'},
        {name:'Italic', key:'I', openWith:'_', closeWith:'_'},
        {name:'Bulleted List', openWith:'- ' },
        {name:'Numeric List', openWith:function(markItUp) {
          return markItUp.line+'. ';
        }},
        {name:'Picture', key:'P', beforeInsert: function(markItUp) {
          markItUploader.show(markItUp, 'image', 'markdown');
        }},
        {name:'File', beforeInsert: function(markItUp) {
          markItUploader.show(markItUp, 'file', 'markdown');
        }},
        {name:'Link', key:'L', openWith:'[', closeWith:']([![Url:!:http://]!])', placeHolder:'Your text to link' +
        ' here...' },
        {name:'Quotes', openWith:'> '},
        {name:'Code Block / Code', openWith:'(!(\t|!|`)!)', closeWith:'(!(`)!)'}
      ];
      break;

    case 'textile':
      languageMarkup = [
        {name:'Heading 1', openWith:'h1. ', placeHolder:'Your title here...' },
        {name:'Heading 2', openWith:'h2. ', placeHolder:'Your title here...' },
        {name:'Heading 3', openWith:'h3. ', placeHolder:'Your title here...' },
        {name:'Heading 4', openWith:'h4. ', placeHolder:'Your title here...' },
        {name:'Heading 5', openWith:'h5. ', placeHolder:'Your title here...' },
        {name:'Heading 6', openWith:'h6. ', placeHolder:'Your title here...' },
        {name:'Bold', key:'B', openWith:'*', closeWith:'*'},
        {name:'Italic', key:'I', openWith:'_', closeWith:'_'},
        {name:'Bulleted List', openWith:'(!(* |!|*)!)'},
        {name:'Numeric List', openWith:'(!(# |!|#)!)'},
        {name:'Picture', key:'P', beforeInsert: function(markItUp) {
          markItUploader.show(markItUp, 'image', 'textile');
        }},
        {name:'File', beforeInsert: function(markItUp) {
          markItUploader.show(markItUp, 'file', 'textile');
        }},
        {name:'Link', key:'L', openWith:'"', closeWith:'([![Title]!])":[![Link:!:http://]!]', placeHolder:'Your text to link here...' },
        {name:'Quotes', openWith:'bq. '},
        {name:'Code Block / Code', openWith:'bc. '}
      ];
      break;

    default:
      languageMarkup = [
        {name:'Heading 1', openWith:'<h1>', closeWith:'</h1>', placeHolder:'Your title here...' },
        {name:'Heading 2', openWith:'<h2>', closeWith:'</h2>', placeHolder:'Your title here...' },
        {name:'Heading 3', openWith:'<h3>', closeWith:'</h3>', placeHolder:'Your title here...' },
        {name:'Heading 4', openWith:'<h4>', closeWith:'</h4>', placeHolder:'Your title here...' },
        {name:'Heading 5', openWith:'<h5>', closeWith:'</h5>', placeHolder:'Your title here...' },
        {name:'Heading 6', openWith:'<h6>', closeWith:'</h6>', placeHolder:'Your title here...' },
        {name:'Bold', key:'B', openWith:'<strong>', closeWith:'</strong>'},
        {name:'Italic', key:'I', openWith:'<em>', closeWith:'</em>'},
        {name:'Bulleted List', openWith:'<ul>\n\t<li>', closeWith: '</li>\n</ul>' },
        {name:'Numeric List', openWith:'<ol>\n\t<li>', closeWith: '</li>\n</ol>' },
        {name:'Picture', key:'P', beforeInsert: function(markItUp) {
          markItUploader.show(markItUp, 'image', 'html');
        }},
        {name:'File', beforeInsert: function(markItUp) {
          markItUploader.show(markItUp, 'file', 'html');
        }},
        {name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
        {name:'Quotes', openWith:'<blockquote>\n\t<p>', closeWith:'\n</p></blockquote>'},
        {name:'Code Block / Code', openWith:'<pre><code>', closeWith:'</code></pre>'},
      ];
      break;
  };

  markItUploader = {
    modal: $('#markituploader'),
    show: function(markItUp, uploadType, lang) {
        var self = this;
        self.lang = lang;
        self.uploadType = uploadType;
        // one-time setup
        if ( ! self.modal.hasClass('initialized')) {
          self.init(markItUp, uploadType, lang);
        }
        // reset
        self.reset();
        // show modal
        self.modal.modal();
        // bind the insert button
        self.bindInsert();
        // add the alt text
        self.modal.find('.alt-text').val(markItUp.selection);
        // adjust the label
        self.modal.find('.alt-label').toggle(uploadType == 'image');
    },
    init: function(markItUp, uploadType, lang) {
      var self = this;
      self.dropzone = $('#miu-dropzone');
      // bind uploader to field
      $('#miu-file').fileupload({
          dataType: 'json',
          url: markItUp.textarea.dataset[uploadType+'Url'],
          dropzone: self.dropzone,
          replaceFileInput: false, // prevent 'no file chosen' when a file is chosen
          done: function (e, data) {
            self.uploadComplete(data);
          }
      });      
      // dropzone effects
      self.bindDropzoneEffects();
      // mark
      self.modal.addClass('initialized');
    },
    reset: function() {
      var self = this;
      self.img = undefined;
      self.dropzone.removeClass('done');
      self.dropzone.find('.ss-icon').text('attach');
      self.dropzone.find('b').text('Drag a file here to upload it');
    },
    uploadComplete: function(data) {
      var self = this;
      self.img = data.result.filelink;
      self.dropzone.addClass('done');
      self.dropzone.find('.ss-icon').text('image');
      self.dropzone.find('b').text(self.img);
    },
    bindInsert: function() {
       var self = this;
       self.modalFooter = self.modal.find('.modal-footer');
       self.modalFooter.find('button').one('click', function(e) {
           e.preventDefault();
           self.alt = self.modal.find('.alt-text').val();
           self.replace();
           self.modal.modal('hide');
       });
    },
    replace: function() {
        var alt = this.alt || '';
        var url = this.img;

        if (self.uploadType == 'image') {

          if (this.lang === 'markdown') {
              var str = '!['+alt+']('+url+')';
          } else if (this.lang === 'textile') {
              alt = (alt) ? '['+alt+']' : '';
              var str = '!'+url+alt+'!';
          } else { // html
              var str = '<img src="'+url+'" alt="'+alt+'" />';
          }

        } else {

          var text = alt;
          if (this.lang === 'markdown') {
              var str = '['+text+']('+url+')';
          } else if (this.lang === 'textile') {
              var str = '"'+text+'":'+url;
          } else { // html
              var str = '<a href="'+url+'">'+text+'</a>';
          }

        }
        $.markItUp({ replaceWith: str });
    },
    bindDropzoneEffects: function() {
      var self = this;

      // if drag and drop is available
      if('draggable' in document.createElement('span')) {
        self.modal.addClass('draggable');
        $(document).on('dragover', function (e) {
            var dropZone = self.dropzone,
                timeout = window.dropZoneTimeout;
            if (!timeout) {
                dropZone.addClass('in');
            } else {
                clearTimeout(timeout);
            }
            var found = false,
                node = e.target;
            do {
                if (node === dropZone[0]) {
                    found = true;
                    break;
                }
                node = node.parentNode;
            } while (node != null);
            if (found) {
                dropZone.addClass('hover');
            } else {
                dropZone.removeClass('hover');
            }
            window.dropZoneTimeout = setTimeout(function () {
                window.dropZoneTimeout = null;
                dropZone.removeClass('in hover');
            }, 100);
        });
      }
    }
  };

  markitupSettings = {
    previewParserPath: '',
    onShiftEnter:      {keepDefault:false, openWith:'\n\n'},
    markupSet:         languageMarkup
  };

  $('.markitup').markItUp(markitupSettings);

  $('body').on('addRow', '.grid', function() {
    $('.grid .markitup').not('.markItUpEditor').markItUp(markitupSettings);
  });



  /////////////////////////////////////////
  //
  // Datepicker
  //
  /////////////////////////////////////////

  var dateOptions = {
    format: 'yyyy-mm-dd',
  };

  $('.datepicker').datepicker(dateOptions)
    .on('changeDate', function() {
      $(this).datepicker('hide');
    });

  $('body').on('addRow', '.grid', function() {
    $('.grid .datepicker').datepicker(dateOptions)
      .on('changeDate', function() {
        $(this).datepicker('hide');
      });
  });


  /////////////////////////////////////////
  //
  // Timepicker
  //
  /////////////////////////////////////////


  var timeOptions = { defaultTime: 'value' };

  $('.timepicker').timepicker(timeOptions);

  $('body').on('addRow', '.grid', function() {
    $('.grid .timepicker').timepicker(timeOptions);
  });



  /////////////////////////////////////////
  //
  // Auto Slugger
  //
  /////////////////////////////////////////

    $(document).ready(function() {
        var $slug = $('#publish-slug.new-slug'),
            $title = $('#publish-title');
        
        if ($slug.length) {
            // the slug field is on this page
                // slug does not already exist in the system
                $title
                    .on('keyup', function() {
                        var options = { "lang": $("html").attr("lang") };
                        
                        // if the last move was to erase the title, restart auto-slugging
                        if ($(this).val() === '') {
                            $(this).data('slug-edited', false);
                        }
                        
                        // if someone's manually edited the slug, don't auto-slug
                        if ($(this).data('slug-edited')) {
                            return true;
                        }

                        if (transliterate) {
                            options.custom = transliterate;
                        }

                        $slug.val(getSlug($(this).val(), options));
                    });
                
                $slug
                    .on('keyup', function() {
                        // if someone edits the slug manually, don't allow title to auto-slug
                        $title.data('slug-edited', true);
                    })
        }
    });


  /////////////////////////////////////////
  //
  // Tags
  //
  /////////////////////////////////////////


  $('.selectize').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
  });



  /////////////////////////////////////////
  //
  // The Grid
  //
  /////////////////////////////////////////

  // Patch to rename the ids to something, anything unique
  $('#rename_me').attr('id', randomString());

  var checkGridState = function($grid) {
    var opacity,
      max_rows = parseInt($grid.data("maxRows"), 10) || Infinity,
      rows = $grid.find("tbody tr").length;

    opacity = (rows >= max_rows) ? 0.2 : 1.0;
    $grid.next("a.grid-add-row").css("opacity", opacity);
  }

  var updateGrid = function($grid) {
    $grid.children("tbody").children("tr").each(function(i) {
      var row_number = i + 1;
      $(this).children("th").html("<div class='count'>" + row_number + "</div><a href='#' class='grid-delete-row confirm'><span class='ss-icon'>delete</span></a>");
    });
  };

  var renameInputs = function($grid) {
    $grid
      // Only look for inputs with a specified name attribute
      // to prevent UI-driven inputs from interferring
      .find("input[name], textarea[name], select[name]")
      .each(function() {

        var positions = [];

        // get positioning of each parent <tr> within their set of <tr>s
        $(this).parents("tr").each(function() {
          positions.push($(this).parent().children("tr").index($(this)));
        });

        // reverse the array, so that root <tr> is first
        positions.reverse();

        // regex time
        var newName = $(this).attr("name").replace(/page\[[\w\d\-_]+\]\[[\w\d\-_]+](?:\[\d+\]\[[\w\d_\-]+\])+/ig, function(match) {
        var i = 0;

        return match.replace(/(\[\d+\]\[[\w\d\-_]+\])/ig, function(submatch) {
          var output = submatch.replace(/\[\d+\]/i, "[" + positions[i] + "]");

          i++;

          return output;
        });
      });

      $(this).attr("name", newName);

      // Patch to rename the ids to something, anything unique
      $('#rename_me').attr('id', randomString());

    });
  };

  var stick_helper_width = function(e, tr) {
    var $originals = tr.children();
    var $helper = tr.clone();
    $helper.css("width", "100%").children().each(function(index) {
      $(this).width($originals.eq(index).width())
    });
    return $helper;
  };

  var sortable_options = {
    helper: stick_helper_width,
    handle: 'th.drag-indicator',
    placeholder: 'drag-placeholder',
    forcePlaceholderSize: true,
    axis: 'y',

    start: function (event, ui) {
      var num_cols = $(this).find('tr')[0].cells.length;
      ui.placeholder.html('<td colspan='+num_cols+'>&nbsp;</td>');
    },

    update: function(event, ui) {
      $(event.target).find('> tr').each(function() {
        var row_number = $(this).index() + 1,
            $grid = $(this).closest(".grid");

        $(this).children("th:first-child").html("<div class='count'>" + row_number + "</div><a href='#' class='grid-delete-row confirm'><span class='ss-icon'>delete</span></a>");
        renameInputs($grid);
      });
    }
  };

  // add a new row to the grid
  $(".primary-form").on("click", "a.grid-add-row", function () {
    var $grid = $(this).parent().children(".grid:first"),
        row_count = $grid.children("tbody").children("tr").length,
        max_rows = $grid.data("maxRows") || Infinity,
        empty_row = $grid.data("emptyRow");

    if (row_count >= max_rows) {
      return false;
    }

    $grid.append(empty_row).find("table.grid tbody").sortable(sortable_options);

    renameInputs($grid);
    checkGridState($grid);
    updateGrid($grid);

    $grid.trigger('addRow');

    return false;
  });

  $(document).on('click', 'a.grid-delete-row', function() {
    var message, sublevel_target,
        $grid = $(this).closest(".grid"),
        min_rows = $grid.data("minRows") || 0;

    // if we haven't asked to confirm, do that now
    if ($(this).is(".confirm")) {
      var text = $(this).attr('data-confirm-message') || 'Are you sure?';

      response = confirm(text);

      // prevent row deletion if min_rows is set and this would go under that
      if ($grid.children("tbody").children("tr").length <= min_rows) {
        if (min_rows > 0) {
          message = "This grid requires at least " + min_rows + " row";
          message += (min_rows === 1) ? "." : "s.";
          alert(message);
        }

        $(this).addClass("confirm").html('<span class="icon">u</span>');
        checkGridState($grid);
        updateGrid($grid);
        return false;
      }

      if (response === true) {
        // ok, remove this row
        $(this).closest('tr').remove();
      }

      //if there are no rows, add an empty one.
      if($grid.children("tbody").children("tr").length == 0) {
          $grid.append($grid.data("emptyRow")).find("table.grid tbody").sortable(sortable_options);
          $grid.trigger('addRow');
      }

      // rename inputs
      renameInputs($grid);
      checkGridState($grid);
      updateGrid($grid);
      return false;
    }
  });

  $(".grid tbody").sortable(sortable_options);



  /////////////////////////////////////////
  //
  // Confirm Something (Do it!)
  //
  /////////////////////////////////////////

  $('.confirm').click(function() {
    var text = $(this).attr('data-confirm-message') || 'Are you sure?';

    return confirm(text);
  });



  /////////////////////////////////////////
  //
  // Faux Submit
  //
  /////////////////////////////////////////

  $('.faux-submit').click(function(e) {
    e.preventDefault();
    $('.primary-form').submit();
  });



  /////////////////////////////////////////
  //
  // Go Back
  //
  /////////////////////////////////////////

  $('.go-back').click(function(e) {
    e.preventDefault();
    window.history.back();
  });



  /////////////////////////////////////////
  //
  // File
  //
  /////////////////////////////////////////

  $('.btn-remove-file').on('click', function(e) {
    e.preventDefault();
    var name = $(this).next('input').attr('name');

    $(this).parent().parent().append(
      $('<p />').append($('<input/>').attr('type', 'file').attr('name', name))
    );

    $(this).parent().remove();
  });

  /////////////////////////////////////////
  //
  // Inline Help
  //
  /////////////////////////////////////////


  // KeyboardJS.on('ctrl + m', function() {
  //   $('#markdown-modal').modal();
  // }, function() {
  //     //do stuff on release
  // });

  function randomString(length) {
      var string = '',
          length = length || 32,
          possible = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxwz0123456789";

      for (var i=0; i < length; i++)
          string += possible.charAt(Math.floor(Math.random() * possible.length));

      return string;
  }

});

