const app = {
    init(selectors) {
        this.count = 0;
        this.total = 0;
        this.num = document.querySelector(selectors.count);
        this.monitor = document.querySelector(selectors.total);
        
        document
            .querySelector(selectors.btnAdd)
            .addEventListener('click', ev => this.add());

        document
            .querySelector(selectors.btnSave)
            .addEventListener('click', ev => this.save());
        
    },

    add() {
        this.count += 1;
        this.num.textContent = this.count;
    },

    save() {
        this.total += this.count;
        this.monitor.textContent = this.total;
        this.count = 0;
        this.num.textContent = this.count;
    }
}

app.init({
    btnAdd: '.btn-add',
    btnSave: '.btn-save',
    count: '#count-el',
    total: '#total',
});

