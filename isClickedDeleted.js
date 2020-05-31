{
  isClicked ? (
    <View style={styles.onClick}>
      <View>
        <View style={styles.fdWrapper}>
          <Text style={styles.dietTitle}>breakfast</Text>
          <Text style={styles.calorie}>
            <MaterialCommunityIcons
              name="food-apple-outline"
              size={12}
              color="black"
            />
            {calBreakfast}
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.mealLayout}>
            <FlatList
              flexDirection="row"
              data={breakfast}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item, index }) => (
                <Food
                  name={item.name}
                  calorie={item.calorie}
                  desc={item.numberDesc}
                />
              )}
              listKey={(item2, index) => "D" + index.toString()}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={styles.fdWrapper}>
          <Text style={styles.dietTitle}>lunch</Text>
          <Text style={styles.calorie}>
            <MaterialCommunityIcons
              name="food-apple-outline"
              size={12}
              color="black"
            />
            {calLunch}
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.mealLayout}>
            <FlatList
              flexDirection="row"
              data={lunch}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item, index }) => (
                <Food
                  name={item.name}
                  calorie={item.calorie}
                  desc={item.numberDesc}
                />
              )}
              listKey={(item2, index) => "D" + index.toString()}
            />
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={styles.fdWrapper}>
          <Text style={styles.dietTitle}>dinner</Text>
          <Text style={styles.calorie}>
            <MaterialCommunityIcons
              name="food-apple-outline"
              size={12}
              color="black"
            />
            {calDinner}
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.mealLayout}>
            <FlatList
              flexDirection="row"
              data={dinner}
              listH
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item, index }) => (
                <Food
                  name={item.name}
                  calorie={item.calorie}
                  desc={item.numberDesc}
                />
              )}
              listKey={(item2, index) => "D" + index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  ) : null;
}
