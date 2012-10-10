(function() {
        var password = Ape.config("inlinepush.conf", "password");
        Ape.registerCmd("userpush", false, function(params, infos) {
                if (params.password == password) {

                        if ($defined(params.pubid) && $defined(params.data) && $defined(params.raw)) {
                                var user = Ape.getUserByPubid(params.pubid);
                                if (!$defined(user)) return ["401", "UNKNOWN_USER"];

                                user.pipe.sendRaw(params.raw, params.data);

                                return {"name":"pushed","data":{"value":"ok"}};
                        } else {
                                return 0;
                        }
                } else {
                        return ["400", "BAD_PASSWORD"];
                }

        })
})()