window.addEventListener('DOMContentLoaded', (event) => {
const search = instantsearch({
  indexName: 'first_MODs',
  searchClient: algoliasearch(
    'NJ1AOFDULQ',
    '25f23a0f16d7c153ee5eec8eef9d1ae4'
  ),
});


search.addWidgets([
  instantsearch.widgets.configure({
    hitsPerPage: 3,
    distinct: true,
  }),
]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search MODs',
    autofocus: true,
    showReset: true,
    showLoadingIndicator: true,
    templates: {
    
  },
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
    	item: `
      <h5>
        {{ __position }}:
        {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
      </h5>
      <p>{{ post.img }}</p>
    `,
        empty: 'No results for <q>{{ query }}</q>',

      }

  }),
  instantsearch.widgets.poweredBy({
  container: '#powered-by',
})
]);

search.start();



});

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
