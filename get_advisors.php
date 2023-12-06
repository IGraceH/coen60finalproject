<?php
$contents = explode("\n", file_get_contents("data/advisors.txt"));

$search_results = array();
$filter_results = array();

$search = $_GET["search"];
$filters = explode(",", trim($_GET["filters"]));


if (count($filters) > 0) {
	foreach ($contents as $item) {
		foreach ($filters as $filter) {
			if (str_contains(strtolower($item), strtolower($filter))) {
				array_push($filter_results, $item);
				break;
			}
		}
	}
} else {
	$filter_results = $contents;
}

$contents = $filter_results;

if ($search != "") {
	foreach ($contents as $item) {
		if (str_contains(strtolower($item), strtolower($search))) {
			array_push($search_results, $item);
		}
	}
} else {
	$search_results = $contents;
}

sort($search_results);

echo json_encode($search_results);
?>