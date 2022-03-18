interface VatData {
  defineKind: function;
  defineDurableKind: function;
  makeKindHandle: function;
  makeScalarBigMapStore: function;
  makeScalarBigWeakMapStore: function;
  makeScalarBigSetStore: function;
  makeScalarBigWeakSetStore: function;
}

declare let VatData: VatData;
