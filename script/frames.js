var FramesetGeladen = 1;
    function SeiteLaden()
             {
              if(self.location.search.length > 0)
                {
                 var laenge = self.location.search.length;
                 var Neue_url = self.location.search.substring(1,laenge);
                 if (document.images)
                 self.start.location.replace(Neue_url);
             else
                self.start.location.href = (Neue_url);
                }
             }