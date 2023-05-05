passport.use(
  new Strategy(
      {
          clientID: GOOGLE.clientID,
          clientSecret: GOOGLE.clientSecret,
          callbackURL: callBackAuthGoogle,
      },
      async (_, __, profile: any, cb: any) => {
          // Check if user already exists in our DB
          const currentUser = await User.findOne(profile.id);
          const firstName = profile.name.givenName;
          const lastName = profile.name.familyName;
          const sex = 'U';
          if (currentUser === null) {
              // Create user
              const newUser = new User(currentUser);
              const savedUser = await newUser.save(firstName, lastName, profile.id, sex);
              if (savedUser === null) {
                  cb(null, null);
                  return;
              }
              cb(null, savedUser);
              return;
          }
  ))