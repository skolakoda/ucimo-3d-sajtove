# Pravimo 3D sajtove

Pravimo 3D sajtove uz pomoć `Three.js` biblioteke i `CSS3DRenderer`-a.

## Primeri

Pogledaj šta je sve moguće napraviti:

- [Zakrivljen HTML](http://skolakoda.org/pravimo-3d-sajtove/10-zakrivljen-html/)
- [3d strana](http://skolakoda.org/pravimo-3d-sajtove/15-3d-strana/) (sa kontrolama)
- [3d strane](http://skolakoda.org/pravimo-3d-sajtove/18-3d-strane/) (sa kontrolama)
- **[3d geometrija](http://skolakoda.org/pravimo-3d-sajtove/20-3d-geometrija/)** (3d predmeti ugrađeni u običnu stranu)
- [Strana u 3d prostoru](http://skolakoda.org/pravimo-3d-sajtove/30-frejm/) (sa kontrolama i podom)
- **[Strane u 3d prostoru](http://skolakoda.org/pravimo-3d-sajtove/35-frejmovi/)** (bez kontrola i poda)
- [Strane u 3d prostoru](http://skolakoda.org/pravimo-3d-sajtove/38-frejmovi-pod/) (sa kontrolama i podom)
- [Foto galerija](http://skolakoda.org/pravimo-3d-sajtove/40-galerija/) (sa kruzenjem kamere)
- [Video](http://skolakoda.org/pravimo-3d-sajtove/50-video/) (unutar frejma, sa kontrolama)

## Dokumentacija

### Kontrole kamere

Važna napomena: dodavanje kontrola kamere ubija HTML funkcionalnost (ne radi selekcija, input i slično)!

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
