class ReadFile 
{
    constructor($parse) 
    {
        this.restrict = 'A';
        this.scope = false;
        this.$parse = $parse;
    }
    link(scope, element, attrs) 
    {
      let fn = this.$parse(attrs.onReadFile);
      element.on('change', function(onChangeEvent) {
        let reader = new FileReader();
        reader.onload = function(onLoadEvent){
          scope.$apply( function() {
            fn(scope, {$fileContent:onLoadEvent.target.result});
            //fn(scope, {$name:onLoadEvent.target.result});          
          });
        };
        reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
      });
    }
}