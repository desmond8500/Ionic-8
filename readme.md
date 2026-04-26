# Ionic 8

## Description

Modèle de projet Ionic 8 avec angular

## Générer l'APK

```console
ionic build --prod
mv www/browser/* www/
npx cap sync
./gradlew assembleDebug
```
