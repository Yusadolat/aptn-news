export default function($stateProvider) {
    'ngInject';

    $stateProvider
        .state('public.params', {
            url: "/params",
            class: 'module-params',
            views: {
                'content': {
                    templateProvider: ($templateCache) => $templateCache.get('module/params.html'),
                    controller: "WPHCParamsController as paramsCtrl"
                }
            }
        });
}
