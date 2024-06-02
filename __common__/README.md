# Болванка для Google Extensions

Примеры реализации разного API chrome extensions  
https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/power/manifest.json

```
{
    // информация по приложению
    "name": "app name",
    "version": "1.0.0",
    "description": "app description",
  
    // версия google extension
    "manifest_version": 3,
    "action": {
        "default_popup": "index.html",
        "default_png": ""
    },
    
    // скрипты загружаемые бразуером
    "content_scripts": [
    
        // блок скриптов
        // которые изолирован от 
        // других элементов списка
        {
            "js": ['./scripts/index.js'],
            
            // на какие сайты работает
            "matches": []
        }
    ],
    
    // иконки для Интернет магазина Chrome
    "icons": {
        "16": "",
        "32": "",
        "48": "",
        "128": ""
    }
}

```