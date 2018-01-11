let app = new Vue({
   el: '#app',
   data: {
        show_spain: false,
        show_mexico: false,
        show_usa: false,
        show_colombia: false,
        show_venezuela: false,
        show_peru: false,
        show_southamerica: false,
        show_turkey: false,
        show_argentina: false,
        show_chile: false,
       
        show_all_graphs: true
   },
    methods:{
        
        toggleButton(country) {
            this['show_' + country] = !this['show_' + country]

            if (this.show_spain || this.show_mexico || this.show_usa || this.show_colombia || this.show_venezuela || this.show_peru || this.show_southamerica || this.show_argentina || this.show_turkey || this.show_chile) {
                this.show_all_graphs = false
            } else {
                this.show_all_graphs = true
            }

        }
        
    }
});