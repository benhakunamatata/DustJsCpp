(function() {
  dust.register("sample/data", body_0);

  function body_0(chk, ctx) {
    return chk.write("Hello ").reference(ctx.get("name"), ctx, "h").write("! You have ").reference(ctx.get("count"), ctx, "h").write(" new messages.");
  }
  return body_0;
})();