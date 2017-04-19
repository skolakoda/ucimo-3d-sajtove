# Učimo 3D sajtove

Pravimo 3D sajtove, 3D transformišemo DOM. `Three.js` i `CSS3DRenderer` su neviđeno olakšali 3D transformacije stranica.

## Primeri

- [Zakrivljen HTML](http://skolakoda.org/ucimo-3d-sajtove/10-zakrivljen-html/) (bez kontrola)
- [3d strana](http://skolakoda.org/ucimo-3d-sajtove/15-3d-strana/) (sa kontrolama)
- [3d strane](http://skolakoda.org/ucimo-3d-sajtove/18-3d-strane/) (sa kontrolama)
- [3d geometrija](http://skolakoda.org/ucimo-3d-sajtove/20-3d-geometrija/) (WebGL ugrađen u običnu stranu)
- [CSS 3d geometrija](http://skolakoda.org/ucimo-3d-sajtove/25-css-geometrija) (bez WebGL-a)
- [Frejm](http://skolakoda.org/ucimo-3d-sajtove/30-frejm/) (sa kontrolama i podom)
- [Frejmovi](http://skolakoda.org/ucimo-3d-sajtove/35-frejmovi/) (bez kontrola i poda)
- [Frejmovi](http://skolakoda.org/ucimo-3d-sajtove/38-frejmovi-pod/) (sa kontrolama i podom)
- [Galerija](http://skolakoda.org/ucimo-3d-sajtove/40-galerija/) (sa kruzenjem kamere)
- [Video](http://skolakoda.org/ucimo-3d-sajtove/50-video/) (unutar frejma, sa kontrolama)

## Dokumentacija

### Kontrole kamere

Kontrole ubijaju HTML funkcionalnost (ne radi selekcija, input i slično)!

```js
const kontrole = new THREE.OrbitControls(kamera)
```

Ograničava horizontalno (mora u intervalu od `-Math.PI` od `Math.PI`):

```js
kontrole.minAzimuthAngle = - Math.PI
kontrole.maxAzimuthAngle = Math.PI
```

Ograničava vertikalno:

```js
kontrole.minPolarAngle = 0
kontrole.maxPolarAngle = Math.PI
```

## Izvor

Neki [primeri](https://github.com/josdirksen/essential-threejs) su preuzeti iz knjige *Three.js Essentials*, Josa Dirksena.
