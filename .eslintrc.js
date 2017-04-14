module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "jquery": true
    },
    "rules": {
        "react/require-extension": 0,
        "linebreak-style": 0,
        "prefer-template": 0,
        "max-len": 0,
        "no-unused-vars": [2, { "vars": "all", "args": "none", "varsIgnorePattern": "^React|h$"}],
        "func-names": 0,
        "prefer-arrow-callback": 0,
        "one-var": 1,
        "prefer-const": 1,
        "indent": [2, 4],
        "no-mixed-operators": 0,
        "no-alert": 0,
        "no-param-reassign": 1,
        //
        "import/no-unresolved": 1,
        // TODO: delete rule `import/no-extraneous-dependencies` after we get rid of seajs
        "import/no-extraneous-dependencies": 0,
        "object-curly-spacing": 0,
        // other virtual dom libraries are welcomed
        // "no-unused-vars": [2, { "varsIgnorePattern": "^h$" }],
        "react/jsx-filename-extension": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/img-has-alt": 0,
        "react/prop-types": 1,
        //deku use class instead of className
        "react/no-unknown-property": 1,
        "react/prefer-stateless-function": 0,
        // not now
        "no-param-reassign": 0,

        "no-confusing-arrow": 0,
        "arrow-body-style": 0,
        "no-return-assign": 0,

        "react/jsx-boolean-value": 0,

        "react/sort-comp": 0,
        // using the string refs and callback refs are different... using callback in krc-wrappingpopup leads to an error
        "react/no-string-refs": 0,

        // the tailing comma is inconsitent with object spreed syntax: {...a, ...b,} is invalid
        "comma-dangle": 0,
        "no-underscore-dangle": 0,
        "import/no-amd": 0,
        "no-script-url": 0,
        "no-new": 0,
        "wrap-iife": [2, "inside"],
        "no-lonely-if": 1,
        "react/no-multi-comp": 0,
        "react/jsx-no-target-blank": 0
    },
    "globals": {
        "$": false,
        "require": false,
        "define": false,
        "seajs": false
    },
    settings: {
      'import/resolver': {
        'Handlebars': {}
      }
    }
};
