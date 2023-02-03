use js_sys::Math;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn random() -> f64 {
    Math::random()
}
