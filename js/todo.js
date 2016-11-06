
//*Author: Robert White
//*Assignment: WI2.0 Mobile Development, Digital Skills Academy
//Student ID: ???
//Date: 2016/05/02
//Ref: Ref: Jon Duckett HTML & CSS , Jon Duckett Javascript & jQuery

angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    var todoList = [
      {title:'Take the dog for a walk', priority:' *LOW Priority', done:false}, {title:'Go for a beer with the lads', priority:' *LOW Priority', done:false}];
      $scope.todoList = todoList;

    $scope.addTodo = function() {
      todoList.push({title:todoList.Title, priority:todoList.priority, done:false});
      todoList.Title = '';
    };


    $scope.removeItem = function($index){
      $scope.todoList.splice($index, 1);
    };

    $scope.getTotal = function () {
    return $scope.todoList.length;
};

    $scope.strikethrough = function () {
        $scope.todoList = _.filter($scope.todoList, function(todo){
            return !todo.done;
        });
    };

});
